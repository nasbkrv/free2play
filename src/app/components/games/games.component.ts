import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  allGames: Game[] = [];
  platforms: any = [];
  genres: any = [];
  publishers: any = [];

  filterText: string = '';
  filterPublisher: any;
  filterGenre: any;
  filterPlatform: any;

  searchOpen: boolean = false;
  searchPublisher: string = '';

  private numOfGamesToInit: number = 28;
  private gamesToLoad: number = 28;
  public gamesToShow: any;
  public isFullListDisplayed: boolean = false;

  // FONT AWESOME ICONS
  arrowUp = faCaretUp;
  arrowDown = faCaretDown;

  constructor(private gameService: GamesService, private titleService: Title) {}

  onScroll() {
    if (this.numOfGamesToInit <= this.allGames.length) {
      this.numOfGamesToInit += this.gamesToLoad;
      this.gamesToShow = this.allGames.slice(0, this.numOfGamesToInit);
    } else {
      this.isFullListDisplayed = true;
    }
  }
  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }
  clearSearch() {
    this.filterPublisher = undefined;
  }
  ngOnInit(): void {
    this.titleService.setTitle('Free 2 Play Games');

    this.gameService.getGamesApi().subscribe((games) => {
      this.allGames = games;
      this.allGames.forEach((game) => {
        if (!this.platforms.includes(game.platform.trim())) {
          this.platforms.push(game.platform.trim());
        }
        if (!this.genres.includes(game.genre.trim())) {
          this.genres.push(game.genre.trim());
          this.genres.sort();
        }
        if (!this.publishers.includes(game.publisher.trim())) {
          this.publishers.push(game.publisher.trim());
          this.publishers.sort();
        }
      });

      this.gamesToShow = this.allGames.slice(0, this.numOfGamesToInit);
    });
  }
}
