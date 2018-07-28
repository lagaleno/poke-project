import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrainerService {

	trainerUrl: string = 'http://localhost:8000/api/trainers/';

  constructor(private http: HttpClient) { }

  getTrainer():Observable<any> {
  	return this.http.get(this.trainerUrl).map(res => res);
  }

  createTrainer(trainer):Observable<any> {
  	return this.http.post(this.trainerUrl, {
  		'nome': trainer.name,
  		'pokemon': trainer.pokemon,
  		'codigo': trainer.id
  	}).map(res => res);
  }

  deleteTrainer(id):Observable<any> {
  	return this.http.delete(this.trainerUrl + id).map(res => res);
  }
}
