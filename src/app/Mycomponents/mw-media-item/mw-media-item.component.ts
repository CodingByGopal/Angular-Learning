import { Component } from '@angular/core';

@Component({
  selector: 'app-mw-media-item',
  templateUrl: './mw-media-item.component.html',
  styleUrls: ['./mw-media-item.component.css'],
})
export class MwMediaItemComponent {
  name = 'Media Item 1';
  tag =
    'This line is generated from mw-media-item.components.ts file by using <----- [textContent]="tag" -----> (its called property binding)';
  wasWatched() {
    return true;
  }

  onDelete() {
    console.log('deleted');
  }
}
