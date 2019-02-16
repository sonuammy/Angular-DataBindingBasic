import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Data Binding';

  // Two-way Binding
  username: string ='';


  // String Interpolation
  ServerId: number = 8080;
  ServerStatus: string = 'Offline';
  ServerStatus1: string = 'Online';
  getServerStatus(){
    return this.ServerStatus1;
  }

  // Property Binding
  allowServer: boolean = false;
  constructor(){
    setTimeout(()=>{
    this.allowServer=true;
    },2000);
  }

  // Event Binding
  serverCreationStatus: string='No server was created';
  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }

}
