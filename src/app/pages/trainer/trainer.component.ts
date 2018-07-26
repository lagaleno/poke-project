import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

	passwordError: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(login) {
  	console.log(login);
  }

  checkPassword(senha) {
  	console.log(this.passwordError);
  	if(senha.value.length != 6)
  		this.passwordError = true;
  	else
  		this.passwordError = false;
  }

}
