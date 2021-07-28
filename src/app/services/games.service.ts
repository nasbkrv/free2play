import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Game } from '../interfaces/game';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'aplication/json',
    'x-rapidapi-key': 'd22f2a87ddmshf8b6b789c275125p183748jsn015a15283292',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private allGamesUrl =
    'https://free-to-play-games-database.p.rapidapi.com/api/games';
  private singleGameUrl =
    'https://free-to-play-games-database.p.rapidapi.com/api/game?id=';

  constructor(private http: HttpClient) {}

  getGamesApi(): Observable<Game[]> {
    return this.http.get<Game[]>(this.allGamesUrl, httpOptions);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.singleGameUrl}${id}`, httpOptions);
  }
  getGameByName(name:string):Observable<Game> {
    return this.getGamesApi().pipe(switchMap(games=>{
      try {
        let gameId = games.filter(g=>{
          return g.title.toLocaleLowerCase() == name.toLocaleLowerCase();
        })[0];
        return this.http.get<Game>(`${this.singleGameUrl}${gameId.id}`, httpOptions)
      } catch (error) {
        throw new Error("Game not found")
      }
    }))
  }
}
