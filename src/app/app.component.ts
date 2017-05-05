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
  rate:number= 0.1; //雷的数量概率
  hasMine={};
  count={};
  isOpen={};
  isFlag={};//是否标记为地雷
  totalMine: number = 0;
  flagTag: number = 0; //标记旗子的个数
  firstClick: boolean = true;
  time:number = 0;
  nIntervalId:any;
  restart: boolean = true;
  gameInPlay: boolean = false;

  numArr(x:any){
    let numArr = [];
    for (let i = 0; i < x; i++) {
      numArr.push(i);
    }
    return numArr;
  }
  coord(x:any, y:any){
    //返回坐标
    x = x < 10 ? "0" + x: x.toString();
    y = y< 10 ? "0" + y: y.toString();
    return x + y;
  }
  leftClick( index: string){
    if ( this.firstClick ){
      //todo: do something to avoid boom at first click
      this.firstClick = false;
      this.startTimeCounting();
      this.gameInPlay = true;
    }
    if ( !this.gameInPlay ){ return; }
    if( this.hasMine[index] ) {
      //lose game
      clearInterval(this.nIntervalId);
      alert("game over!");
      this.openAll();
      this.gameInPlay = false;
      this.restart = false;
      return;
    }
    if( this.isFlag[ index ]){
      return;
    }
    this.restart = false;
    this.isOpen[index] = true;
    if( this.ifWin() ){
      clearInterval(this.nIntervalId);
      alert( "you win! total time is: " + this.time.toFixed(1));
      this.gameInPlay = false;
    }
    if( this.count[index] === 0 ){
      //打开0地雷的周边所有格子
      this.open( index );
    }
  }
  rightClick( index: string ){
    this.restart = false;
    this.isFlag[ index ] = !this.isFlag[ index ];//toggle between true and false
    if ( this.isFlag[ index ] ) {
      this.flagTag++;
    }else {
      this.flagTag--;
    }
  }
  open(index){
    //递归打开0地雷及其周围的空格
    if( this.count[index]===0){
      let arr = this.decodeCoord(index);
      let x = arr[0];
      let y = arr[1];
      for(let i = x -1; i< x + 2; i++){
        for( let j = y-1; j < y + 2; j++){
          let tempIndex = this.coord( i, j );
          if( !this.count.hasOwnProperty( tempIndex ) ){ continue; }
          if( this.isFlag[ tempIndex ] ) { continue; }
          if( this.count[tempIndex] === 0 && this.isOpen[ tempIndex ] === false){
              this.isOpen[ tempIndex ] = true;
              this.open(tempIndex);
          }
            this.isOpen[ tempIndex ] = true;
        }
      }
    }
  }
  openAll(){
    for ( let i = 0; i < this.xLength; i++){
      for ( let j = 0; j < this.yLength; j++) {
        let tempCoord = this.coord(i, j);
        this.isOpen[ tempCoord ] = true;
      }
    }
  }
  decodeCoord(index:string){
    return [parseInt(index.substring(0,2)), parseInt(index.substring(2,4))];
  }
  initGame(){
    this.firstClick = true;
    this.time = 0;
    this.totalMine = 0;
    this.flagTag = 0;
    this.restart = true;
    this.gameInPlay = false;
    this.stopTime();
    for ( let i = 0; i < this.xLength; i++){
      for ( let j = 0; j < this.yLength; j++) {
        let tempCoord = this.coord(i, j);
        this.isFlag[ tempCoord ] = false;
        this.hasMine[tempCoord] = Math.random() > 1 - this.rate? true: false;//set mine percentage here
        this.isOpen[tempCoord] = false;
        if( this.hasMine[tempCoord]) { this.totalMine ++; }
        this.count[tempCoord] = 0;
      }
    }
    //统计每个格子周围地雷数量
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
  ifWin(){
    let isAllNumberOpened = true;
    for ( let i= 0; i< this.xLength; i++){
      for( let j = 0; j < this.yLength; j++){
        let index = this.coord( i, j );
        if ( !this.hasMine[ index ] && !this.isOpen[ index ]){
          isAllNumberOpened = false;
          return;
        }
      }
    }
    return isAllNumberOpened;
  }
  startTimeCounting(){
    this.nIntervalId = setInterval(
      ()=>{
        this.time = this.time + 0.1;
      },
      100
    )
  }
  stopTime(){
    clearInterval( this.nIntervalId);
  }
  ngOnInit(){
    this.initGame();
  }
}
