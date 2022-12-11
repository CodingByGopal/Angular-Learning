import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-for-data',
  templateUrl: './ng-for-data.component.html',
  styleUrls: ['./ng-for-data.component.css'],
})
export class NgForDataComponent {
  @Input() storeItem: any;
}
