import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mine-grid',
  templateUrl:'./grid.component.html',
  styleUrls:['./grid.component.css']
})

export class MineGrid{
  @Output() leftClick = new EventEmitter<string>();
  @Output() rightClick = new EventEmitter<string>();
  @Input() unCovered:boolean;
  @Input() count:any;
  @Input() hasMine: boolean;
  @Input() coord: string;

  onClick() { // without type info
    this.rightClick.emit(this.coord);
    console.log( "right click");
    return false;
  }
  onLeftClick(){
    this.leftClick.emit(this.coord);
    console.log("left click!");
    return false;
  }
  ngOnInit(){
    if (this.hasMine){
      this.count = 9;
    }
  }
}
