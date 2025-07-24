import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})


export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {} 

  onSubmit() {
    if (this.username && this.password) {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      alert('Login successful!');
      this.router.navigate(['/home']);
    } else {
      alert('Please enter username and password.');
    }
  }
}
