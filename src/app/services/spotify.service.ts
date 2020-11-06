import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  private getQuery(query: string): Observable<object>{
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAMMqQW6vO_INq9VCM0YZi3o4dLSN_PkM0mLoC0K-2rbU3PhSKPHEshAb4XJb1AxWu45GWGm3xRNMUmeu8etjxZUCxwzf7fPbSnQ1M3gIbyF-DMrmFlECmQDjnKbMks2_razl6l-7dmYmcnUHcFKa0baYMeRespFs0',
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(): Observable<object> {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map((data: any) => data.albums.items ));
  }

  getArtistas(termino: string): Observable<object> {
    if (!termino){
      return of([]);
    }
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items ));
  }

  getArtista(artistaId: string): Observable<object> {
    return this.getQuery(`artists/${artistaId}`);
  }

  getTopTracks(artistaId: string): Observable<Array<any>> {
    return this.getQuery(`artists/${artistaId}/top-tracks?market=us`)
    .pipe(map((res: any) => res.tracks));
  }
}
