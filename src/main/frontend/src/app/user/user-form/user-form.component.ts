import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  @Input() user: User;
  @Output() userSubmitForm = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    //console.log('asdf', this.user.id)
    const { firstname, lastname, email } = this.user;
    this.userForm = new FormGroup({
      firstname: new FormControl(firstname, [Validators.required]),
      lastname: new FormControl(lastname, [Validators.required]),
      email: new FormControl(email, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.userSubmitForm.emit(this.userForm.getRawValue());
  }

}
