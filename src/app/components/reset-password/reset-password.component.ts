import { Component, OnInit } from '@angular/core';
import {Login} from '../../model/Login';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPassword = new Login();
  changePasswordForm: FormGroup;
  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.myForm();
  }

  myForm(): void {
    this.changePasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });

  }

}
