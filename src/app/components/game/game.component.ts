import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { Game } from '../../interfaces/game';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  id!: number;
  game!: Game;
  gameName!:any;
  // FONT AWESOME ICONS
  faCircle = faCircle;
  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.gameName = params.get('name')?.split("-").join(" ");
    });
 
    this.gameService.getGameByName(this.gameName).subscribe(game=>{
      this.game = game;
      this.titleService.setTitle(`F2P | ${game.title}`);
    })

  }
}
