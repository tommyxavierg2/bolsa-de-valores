import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Register';
  confirmPassword = '';
  user = {
    firstName: '',
    lastName: '',
    email: '',
    userType: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register(user) {
    this.userService.add(user)
      .subscribe(userResponse => alert('User successfully created'));
  }

}
