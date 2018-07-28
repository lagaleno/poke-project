import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../services/trainer/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(public trainerService: TrainerService) { }

  ngOnInit() {
  }

  onSubmit(trainer) {
  	this.trainerService.createTrainer(trainer.value).subscribe(
  		(res) => {
  			console.log(res);
  		});
  }

}
