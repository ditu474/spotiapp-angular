import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer){ }

  transform( uri: string): any {
    const url = 'https://open.spotify.com/embed/track/';
    const idUri = uri.split(':')[2];
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + idUri );
  }

}
