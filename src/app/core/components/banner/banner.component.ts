import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { AuthService } from './../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  private router = inject(Router);
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  picture = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  logout() {
    this.auth.SignOut();
  }
}
