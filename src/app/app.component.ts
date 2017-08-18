import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  age = 22;
  person = {
    name: 'Giorgos',
    age: 21
  };

  getName(){
    return 'George'
  };

  setAge(age: number){
    ++this.age;
  };
}
