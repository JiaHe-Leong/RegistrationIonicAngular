import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  genders = ['Male','Female'];

  model = new User('', '', '','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new User('', '', '','','','');
  }
  
  ngOnInit() {}

}
