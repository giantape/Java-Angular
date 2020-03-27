import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  showModal = false;
  user: User;
  constructor(
    private userService: UserService,
    private route: Router) {
    this.user = {
      id: Number(''),
      firstname: '',
      lastname: '',
      email: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit(user: User) {
    //console.log('User Create', user);
    this.userService.saveUser(user).subscribe(() => {
      this.route.navigateByUrl('/users');
      this.showModal = false;
    });

  }

}
