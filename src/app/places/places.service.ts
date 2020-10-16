import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City!',
      'https://pix10.agoda.net/hotelImages/267/2676000/2676000_17090716140056113648.jpg',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://mlbufqxx4mlc.i.optimole.com/NUlbwlo.9dVs~44fea/w:1024/h:512/q:auto/https://tophotel.news/wp-content/uploads/2018/06/25hours-francess-1024x512.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://favim.com/orig/201106/28/castle-fog-foggy-hawarden-castle-mist-Favim.com-86047.jpg',
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }

  constructor() {}
}
