import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mine-grid',
  templateUrl:'./grid.component.html',
  styleUrls: [`./grid.component.css`]
})

export class MineGrid{
  @Output() leftClick = new EventEmitter<string>();
  @Output() rightClick = new EventEmitter<string>();
  @Input() unCovered:boolean;
  @Input() count:any;
  @Input() hasMine: boolean;
  @Input() coord: string;
  @Input() isOpen: boolean;
  currentStyles: {};

  onClick() { // without type info
    this.rightClick.emit(this.coord);
    console.log( "right click");
    return false;
  }
  onLeftClick(){
    this.leftClick.emit(this.coord);
    console.log("left click!");
    this.setCurrentStyles();
    return false;
  }
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'color':  this.hasMine      ? 'red' : 'green',
      'background': this.isOpen ? 'yellow'   : 'grey'
    };
    // color: hasMine? 'red': 'green',
  }
  ngOnInit(){
    if (this.hasMine){
      this.count = "9";
    }
    this.setCurrentStyles();
  }
  ngOnChanges(){
    console.log("isOpen?:" + this.isOpen);
    this.setCurrentStyles();
  }
}
