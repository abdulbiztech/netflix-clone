declare var google: any;
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
      '31681522671-bdkoj23v46gfpt12qjoedaq895ikjbp5.apps.googleusercontent.com',      callback: (resp: any) => {
        console.log(resp);
        this.handleLogin(resp);
      },
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectengle',
      width: 350,
    });
  }
  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }
  handleLogin(response: any) {
    if (response) {
      //decode the token
      const payload = this.decodeToken(response.credential);
      sessionStorage.setItem('loggedInUser', JSON.stringify(payload));
      this.router.navigate(['browse']);
    }
  }
}
