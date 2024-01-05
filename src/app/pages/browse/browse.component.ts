import { MoviesService } from './../../shared/services/movies.service';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { BannerComponent } from 'src/app/core/components/banner/banner.component';
import { MovieCarouselComponent } from 'src/app/shared/components/movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent implements OnInit {
  MoviesService = inject(MoviesService);
  private router = inject(Router);
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  picture = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  ngOnInit(): void {
    this.MoviesService.getMovies().subscribe((res) => {
      console.log('response', res);
    });
  }
  logout() {
    this.auth.SignOut();
  }
}
