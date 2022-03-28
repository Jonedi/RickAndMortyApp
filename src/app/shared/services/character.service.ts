import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '@shared/interfaces/character.interface';
import { Episode } from '@shared/interfaces/episode.interface';
import { Loc } from '@shared/interfaces/location.interface';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query = '', page = 1) {
    const params = `${environment.UrlApi}/?name=${query}&page=${page}`
    return this.http.get<Character[]>( params );
  }
  getDetails(id: number) {
    return this.http.get<Character>(`${environment.UrlApi}/${id}`);
  }
  getEpisode(id: number) {
    return this.http.get<Episode>(`${environment.UrlEpi}/${id}`);
  }
  getLocation(id: number) {
    return this.http.get<Loc>(`${environment.urlLoc}/${id}`);
  }
}
