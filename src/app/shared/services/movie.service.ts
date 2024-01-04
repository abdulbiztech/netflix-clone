import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGEyNjVhMTExMjQ2MThkOWRjYTUzNTQ4OTkwMWM2MiIsInN1YiI6IjY1OGVhNmU4MGU1YWJhNzFlNDg2MWMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gaf-E88WiWKO2GyEx40b4WnpOnZpT_caDC1UTyNv0jQ',
  },
};
@Injectable({
  providedIn: 'root',
})
export class MovieService implements OnInit {
  http = inject(HttpClient);
  ngOnInit(): void {}

  getMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }
}
