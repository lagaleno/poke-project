import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ginasio',
  templateUrl: './ginasio.component.html',
  styleUrls: ['./ginasio.component.css']
})
export class GinasioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(login) {
  	console.log(login);
  }
}
