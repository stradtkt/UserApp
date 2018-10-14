import { UserService } from './../../../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../../../models/user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  @Output() createUser = new EventEmitter<User>();
  user = new User();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    // console.log();
    this.userService.createUser(this.user)
      .subscribe(user => {
        this.user = new User();
        form.reset();
      });
  }
}
