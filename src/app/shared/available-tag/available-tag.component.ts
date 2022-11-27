import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-available-tag',
  templateUrl: './available-tag.component.html',
  styleUrls: ['./available-tag.component.css'],
})
export class AvailableTagComponent implements OnChanges {
  @Input()
  isAvailable: boolean;

  public isLoading: boolean;

  public constructor() {
    this.isAvailable = false;
    this.isLoading = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isAvailable !== undefined) {
      this.isLoading = false;
    }
  }
}
