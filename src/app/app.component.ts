import { Component } from '@angular/core';
import { User } from './models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userArray: User[] = [
  ];

  selectedUser: User = new User();

  addOrEdit() {
    if(this.selectedUser.id === 0) {
      this.selectedUser.id = this.userArray.length + 1;
      this.userArray.push(this.selectedUser);
    }

    this.selectedUser = new User();
  }

  openForEdit(user: User) {
    this.selectedUser = user;
  }

  delete() {
    if(confirm('¿Seguro que quieres eliminarlo?')) {
      this.userArray = this.userArray.filter (x => x != this.selectedUser);
      this.selectedUser = new User();
    }
  }

}
