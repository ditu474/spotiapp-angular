import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artistaId: string;
  artista: any;
  topTracks: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.artistaId = params.id;
      this.spotifyService.getArtista(this.artistaId)
      .subscribe(artista => {
        this.artista = artista;
      });
      this.spotifyService.getTopTracks(this.artistaId)
      .subscribe(tracks => {
        this.topTracks = tracks;
      });
    });
  }

}
