import { Component } from '@angular/core';

@Component({
  selector: 'mine-grid',
  template:'<i>{{count}}</i>',
  styleUrls:['./grid.component.css']
})

export class MineGrid{
  private unCovered:boolean = true;
  private count:number = 8;
}
