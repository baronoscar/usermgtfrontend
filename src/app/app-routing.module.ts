import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {UserViewComponent} from './components/user-view/user-view.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {LoginComponent} from './components/login/login.component';
import {SuccessDialogComponent} from './components/success-dialog/success-dialog.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'create', component: RegisterComponent, canActivate: [AuthGuard]
  },
  {path: 'resetPassword', component: ResetPasswordComponent},
  {
    path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard]
  },
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {
    path: 'list', component: UserListComponent
    , canActivate: [AuthGuard]
  },
  {path: 'details', component: UserViewComponent},
  {path: 'success', component: SuccessDialogComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
