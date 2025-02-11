import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
      this.error = null;
    }, (err) => {
      this.error = err.error.error.message;
      this.loading = false;
    });
  }


}
