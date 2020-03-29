import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { _ } from 'underscore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnChanges {
  showModal = false;
  @Input() user: User;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnChanges(): void {
    this.user = {
      ...this.user,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email
    };
  }

  onSubmit(user: User) {
    const update = _.extend(user, {id: this.user.id});
    this.userService.updateUser(this.user.id, update).subscribe(() => {
      this.router.navigateByUrl('/users');
      this.showModal = false;
    });
  }

  onDelete() {
    this.userService.deleteUser(this.user.id).subscribe(() => {
      this.router.navigateByUrl('/users');
    });
  }

}
