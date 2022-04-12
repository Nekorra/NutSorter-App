import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  status: boolean = false;
  color: string = "danger";
  buttonstatus: string = "off";
  speed: any;

  constructor(public backend: BackendService) {}


  ngOnInit() {
    this.backend.setData(this.status);
    this.speed = 50;
  }

  switch() {
    switch(this.status) {
      case false:
        console.log("on")
        this.status = true;
        this.color = "success"
        this.buttonstatus = "on";
        this.backend.setData(this.status);
        this.backend.setSpeed(this.speed);
        break;
      case true:
        console.log("off")
        this.status = false;
        this.color = "danger"
        this.buttonstatus = "off";
        this.backend.setData(this.status);
        break;
    }
  }

  updateSpeed() {
    this.backend.setSpeed(this.speed);
    console.log(this.speed)
  }

}
