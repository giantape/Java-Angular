import { Component, OnInit, Input } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() users: User;
  @Input() headers = [];
  @Input() className = '';
  constructor() {}

  ngOnInit(): void {
  }

}
