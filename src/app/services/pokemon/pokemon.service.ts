import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {

  pokeApiUrl = 'https://pokeapi.co/api/v2/';
  private httpOptions = {
  	headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(public http: HttpClient) {
    console.log('Hello Pokemon Service');
  }

  getPokemon(id):Observable<any>{
    return this.http.get(this.pokeApiUrl + 'pokemon/' + id).map(res => res);
  }
}
