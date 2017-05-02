import { Component } from '@angular/core';

@Component({
  selector: 'mine-grid',
  templateUrl:'./grid.component.html',
  styleUrls:['./grid.component.css']
})

export class MineGrid{
  private unCovered:boolean = true;
  private count:number = 8;

  onClick() { // without type info
    console.log( "right click");
    return false;
  }
  onLeftClick(){
    console.log("left click!");
    return false;
  }
}
