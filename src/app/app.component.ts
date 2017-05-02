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
}
