import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Import the AuthService
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  passwordValidationError: string = '';  

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  isValidPassword(password: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
  }

  onSubmit() {
    if (this.username && this.email && this.password && this.firstName && this.lastName) {
      
      if (!this.isValidPassword(this.password)) { 
        window.alert('Password must have at least one uppercase letter, one number, and be at least 6 characters long.');
        return;
      }

      this.http.post('http://localhost:3000/api/users/register', {
        username: this.username,
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      }).subscribe(
        res => {
          console.log('User registered:', res);
          this.router.navigate(['/login']);
        },
        err => {
          console.error('Error registering:', err);
        }
      );

    } else {
      console.error('Validation failed'); 
    }
  }
}
