
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {showWarningOnce} from "tslint/lib/error";

@Component({
  selector: 'app-users',
  template: `<p>I'm in the UsersComponent</p>
  <button (click)="setShowInfo()">{{text}}</button>
  <button (click)="onShowAlert()">Show Alert</button>
  <p *ngIf="getShowInfo()">Some extra information</p>
  <p *ngFor="let user of users" [ngStyle]="{'background-color' : color}">{{user}}</p>
  <p [ngStyle]="{'background-color' : color}">Hey Color</p>
  `
})
export class UsersComponent{
  color = 'green';
  showInfo = false;
  text = "Show Info";
  @Input() users : any;
  @Output() alertThrown  = new EventEmitter<string>();

  onShowAlert(){
    this.alertThrown.emit('Alert was trigg2222ered.');
  }

  setShowInfo(){
    if(this.showInfo){
      this.text = "Show Info";
      this.showInfo=false;
    }else{
      this.text = "Hide Info";
      this.showInfo=true;
    }
  }

  getShowInfo(){
    return this.showInfo;
  }
}


