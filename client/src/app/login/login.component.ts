import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  user: any = null;
  newPassword: string = '';
  passwordValidationError: string = '';  

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      response => {
        console.log('Logged in successfully', response);
        this.user = response.user;
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }

  onUpdate() {
    this.authService.updateUser(this.user._id, this.user).subscribe(response => {
      console.log('User updated successfully:', response);
    }, error => {
      console.error('Update failed:', error);
    });
  }

  onChangePassword() {
    if (this.isValidPassword(this.newPassword)) {
      this.authService.updatePassword(this.user._id, this.newPassword).subscribe(response => {
        console.log('Password updated successfully:', response);
        this.newPassword = '';  
      }, error => {
        console.error('Password update failed:', error);
      });
    } else {
      window.alert('Password should contain at least one uppercase letter, one number, and be at least 6 characters long.');
    }
  }

  isValidPassword(password: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
  }
}
