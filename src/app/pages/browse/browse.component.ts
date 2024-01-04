import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { BannerComponent } from 'src/app/core/components/banner/banner.component';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MovieCarouselComponent } from 'src/app/shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from 'src/app/shared/models/video-contents-interface';

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
  movieService = inject(MovieService);
  private router = inject(Router);
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  picture = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  popularMovies: IVideoContent[] = [];
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (resp: any) => {
        console.log(resp);
        this.popularMovies = resp.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  logout() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.SignOut();
  }
}
