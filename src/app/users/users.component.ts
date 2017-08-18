
import {Component} from "@angular/core";
import {showWarningOnce} from "tslint/lib/error";

@Component({
  selector: 'app-users',
  template: `<p>I'm in the UsersComponent</p>
  <button (click)="setShowInfo()" >{{text}}</button>
  <p *ngIf="getShowInfo()">Some extra information</p>`
})
export class UsersComponent{
  showInfo = false;
  text = "Show Info";

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


