import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth-service';
import {UserManagementService} from '../../services/user-management.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  cp: string | number;

  constructor(private route: Router, private authService: AuthService,
              private managementService: UserManagementService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.managementService.findAll().subscribe(value => {
      console.log(this.users);
      this.users = value;
    });
  }

  logout(): any {
    this.authService.logOut();
    this.route.navigate(['login']);
  }

  changePassword(): void {
    this.route.navigate(['changePassword']);
  }
}
