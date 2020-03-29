import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [];
  headers = [
      { key: 'id', label: 'ID' },
      { key: 'firstname', label: 'VORNAME'},
      { key: 'lastname', label: 'NACHNAME'},
      { key: 'email', label: 'E-MAIL'},
      { key: 'action', label: 'AKTIONEN'}
  ]
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => { this.users = users });
  }

}
