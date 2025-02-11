import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (images.length > 0) {
      return images[0].url;
    }
    // Como la app corre desde index.html, el path es relativo a este archivo
    return 'assets/img/noimage.png';
  }

}
