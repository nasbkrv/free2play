import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss'],
})
export class GameItemComponent implements OnInit {
  @Input() game!: Game;

  bottom!: any;
  gameHovered: boolean = true;
  constructor() {}

  over() {
    this.bottom = '0';
    this.gameHovered = false;
  }
  out() {
    this.bottom = '-100%';
    this.gameHovered = true;
  }
  formatParam(param:string){
    return param.replace(/\s+/g,"-");
  }
  ngOnInit(): void {}
}
