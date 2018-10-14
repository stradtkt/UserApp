import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user = new User();
  users: User[] = [];
  selectedUser: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(users => {
        this.users = users;
      });
   }
   onSelect(user: User) {
     this.selectedUser = this.selectedUser === user ? null : user;
   }
   onCreate(user: User) {
     this.userService.createUser(user)
       .subscribe(createdUser => {
         // this.books.push(createdBook);
         this.users = [...this.users, createdUser];
       });
   }
   onRemove(user: User) {
     this.userService.removeUser(Number(user.id.value))
       .subscribe(removeBook => {
           this.users = this.users.filter(u => u.id.value !== removeBook.id.value);
       });
   }
   onEvent(event: Event) {
     event.stopPropagation();
   }
}
