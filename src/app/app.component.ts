import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Friction',
    year: 2010,
    watchedOn: 123727771,
    isFavorite: false,
  };

  onMediaItemDelete(mediaItem: any) {}
}
