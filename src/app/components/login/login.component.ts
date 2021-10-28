import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Login} from '../../model/Login';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../success-dialog/success-dialog.component';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = new Login();
  loginForm: FormGroup;
  constructor(private route: Router, private dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.myForm();
  }

  myForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.userLogin.email, [Validators.required, Validators.minLength(2)]),
      password: new FormControl(this.userLogin.password, [Validators.required, Validators.minLength(1)]),
    });

  }

  forgotPassword(): void {
    this.route.navigate(['forgotPassword']);
  }

  login(): void {
    this.authService.loginUser(this.loginForm.value).subscribe(value => {
      if (value.token){
        localStorage.setItem('token', value.token);
        localStorage.setItem('user', JSON.stringify(value.user));
        this.route.navigate(['list']);
      }
    }, error => {
      window.alert(error.error.errorMessage);
    });
  }



  openDialog(): any {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
    });
    setTimeout(() => {
      dialogRef.close();
    }, 3000);

  }

}
