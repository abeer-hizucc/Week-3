import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {
id!:number;
name!:string;
$implicit !: number;
userList:Users[]=[];
addUser(id:number,name:string){
  const newUser = new Users(id,name);
  this.userList.push(new Users(id,name));
}
}
