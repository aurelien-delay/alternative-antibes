import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeparticipe',
  templateUrl: './jeparticipe.component.html',
  styleUrls: ['./jeparticipe.component.scss']
})
export class JeparticipeComponent implements OnInit {

  private isButtonVisible = false;
  private sign = "assets/plus-sign-in-circle.svg";

  constructor() { }

  ngOnInit() {
  }

  switchForm() {
    this.isButtonVisible = !this.isButtonVisible;
    if (this.sign === "assets/plus-sign-in-circle.svg")    this.sign = "assets/plus-sign-in-circle.svg";
    else                                                   this.sign = "assets/minus-sign-in-circle.svg";
  }

}
