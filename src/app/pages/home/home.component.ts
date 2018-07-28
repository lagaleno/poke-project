import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../services/trainer/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	trainers = [];

  constructor(public trainerService: TrainerService) { }

  ngOnInit() {
  	this.trainerService.getTrainer().subscribe(
  		(res) => {
  			for(let i = 0; i < res.length; i++)
  				this.trainers.push(res);
  		},
  		(error) => {
  			console.log("Oi, eu dei um erro");
  		}
  	);
  }

  delete(i) {
  	this.trainerService.deleteTrainer(this.trainers[i].id).subscribe(
  		(res) => {
  			console.log('consegui');
  		});
  }
}
