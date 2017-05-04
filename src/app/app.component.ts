import { Component } from '@angular/core';
import { MineGrid } from './grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  xLength: number = 10;
  yLength: number = 10;
  rate:number= 0.5555;
  unCovered={};
  hasMine={};
  count={};
  isOpen={};
  totalMine: number = 0;
  flagTag: number = 0; //标记旗子的个数
  firstClick: boolean = true;

  numArr(x:any){
    let numArr = [];
    for (let i = 0; i < x; i++) {
      numArr.push(i);
    }
    return numArr;
  }
  coord(x:any, y:any){
    x = x < 10 ? "0" + x: x.toString();
    y = y< 10 ? "0" + y: y.toString();
    return x + y;
  }
  leftClick( index: string){
    if ( this.firstClick ){
      //do something to avoid boom at first click
      this.firstClick = false;
    }
    console.log( "index:" + index );
    this.hasMine[index] = true;
    this.count[index] = 9;
    this.isOpen[index] = true;
    console.log("child component click left")
  }
  rightClick( index: string){
    console.log( index );
    console.log("child component click right")
    this.flagTag++;
  }
  ngOnInit(){
    //console.log("yers");
    for ( let i = 0; i < this.xLength; i++){
      for ( let j = 0; j < this.yLength; j++) {
        let tempCoord = this.coord(i, j);
        this.unCovered[tempCoord] = false;
        this.hasMine[tempCoord] = Math.random() * this.rate > 0.5? true: false;
        this.isOpen[tempCoord]=false;
        if( this.hasMine[tempCoord]) { this.totalMine ++; }
        this.count[tempCoord] = 0;
      }
    }
    for ( let i = 0; i < this.xLength; i++){
      for ( let j = 0; j < this.yLength; j++) {
        let countCoord = this.coord(i, j);
        for( let  x = i-1; x < i+2; x++){
          for( let y = j-1; y < j+2; y++){
            let tempCoord = this.coord( x, y );
            if( this.hasMine.hasOwnProperty(tempCoord) ){
              if ( this.hasMine[tempCoord] ){
                this.count[countCoord]++;
              }
            }
          }
        }
      }
    }
  }
}
