import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrainerService {

	trainerUrl: string = 'http://localhost:8000/api/trainers/';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getTrainer():Observable<any> {
  	return this.http.get(this.trainerUrl).map(res => res);
  }

  createTrainer(name, pokemon, id):Observable<any> {
  	return this.http.post(this.trainerUrl, {
  		'nome': name,
  		'pokemon': pokemon,
  		'codigo': id
  	}, this.httpHeaders).map(res => res);
  }

  deleteTrainer(id):Observable<any> {
  	return this.http.delete(this.trainerUrl + id).map(res => res);
  }
}
