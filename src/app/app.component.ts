import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
  heading: string = "Person Details";
  person: any = {
    name:{
      first:'John',
      last:'Doe'
    },
    gender:'',
    address: '700 Van Nesse'
  } ;
  

  getInitial(){
    if (this.person.gender === 'm'){
      return 'Mr.'
    }else (this.person.gender === 'f'){

    }
  }
  
}
