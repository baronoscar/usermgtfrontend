import { Component, OnInit } from '@angular/core';
import {Login} from '../../model/Login';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserManagementService} from '../../services/user-management.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePassword = new Login();
  changePasswordForm: FormGroup;
  constructor(private route: Router, private userManagementService: UserManagementService) {
  }

  ngOnInit(): void {
    this.myForm();
  }

  myForm(): void {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required, Validators.minLength(1)]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });

  }

/*
  passwordChange(){
  this.userManagementService.changePassword().subscribe(value => {

  },error => {

  });
  }
*/
}
