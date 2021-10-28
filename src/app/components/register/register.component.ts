import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../model/User';
import {AuthService} from '../../services/auth-service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  userForm: FormGroup;

  constructor(private route: Router, private authServices: AuthService) {
  }

  ngOnInit(): void {
    this.myForm();
  }

  myForm(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
      lastName: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.minLength(2)]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(1)]),
      phoneNo: new FormControl(this.user.phoneNo, Validators.required),
    });

  }


  save(): void {
    console.log(this.userForm.value);
    this.authServices.registerUser(this.userForm.value).subscribe(() => {
      this.userForm.reset();
      this.route.navigate(['list']);
    }, error => {
      window.alert(error.error.errorMessage);
    });


  }


  cancel(): void {
    this.userForm.reset();
    this.route.navigate(['list']);
  }
}
