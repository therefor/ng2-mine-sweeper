import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mine-grid',
  templateUrl:'./grid.component.html',
  styleUrls: [`./grid.component.css`]
})

export class MineGrid{
  @Output() leftClick = new EventEmitter<string>();
  @Output() rightClick = new EventEmitter<string>();
  @Input() count:any;
  @Input() hasMine: boolean;
  @Input() coord: string;
  @Input() isOpen: boolean;
  @Input() isFlag: boolean;
  @Input() restart: boolean;
  currentStyles: {};
  currentText:any;
  rightClickIcon = ["!", "?", ""];
  rightClickCount: number = 0;

  onRightClick() {
    if( !this.isOpen ){
      this.currentText = this.rightClickIcon[this.rightClickCount % 3];
      if (this.currentText === "!" || this.currentText === "?"){
        this.rightClick.emit(this.coord);
      }
      this.rightClickCount ++;
      console.log( "right click");
      return false;
    }
    return false;
  }
  onLeftClick(){
    if( this.isFlag ){
      return;
    }
    this.leftClick.emit(this.coord);
    console.log("left click!");
    return false;
  }
  setCurrentStyles() {
    let fontColor = "green"; //default color
    if ( this.hasMine && this.isOpen ){
      fontColor = "red";
    }else if ( this.isOpen ) {
      switch ( this.count){
        case 1:
          fontColor = "#004d99";
          break;
        case 2:
          fontColor = "green";
          break;
        case 3:
          fontColor = "#800000";
          break;
        case 4:
          fontColor = "#00284d";
          break;
        case 5:
          fontColor = "#b35900";
          break;
        case 6:
          fontColor = "red";
          break;
        default:
          fontColor = "green";
      }
    }
    if ( !this.isOpen && this.currentText ){
      fontColor = this.currentText === "!" ? "red" : "white";
    }
    this.currentStyles = {
      'color':  fontColor,
      'background': this.isOpen ? 'white': 'grey'
    };
  }
  ngOnInit(){
    if (this.hasMine){
      this.count = "";
    }
    this.setCurrentStyles();
    this.rightClickCount = 0;
    this.currentText = "";
  }
  ngOnChanges(){
    if( this.isOpen) {
      this.currentText = this.hasMine ? "X" :(this.count===0? "": this.count);
    }
    this.setCurrentStyles();
    if( this.restart ){
      this.currentText = "";
    }
  }
}
