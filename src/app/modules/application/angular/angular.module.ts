import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { AvailableTagComponent } from 'src/app/shared/available-tag/available-tag.component';

@NgModule({
  declarations: [AngularComponent, AvailableTagComponent],
  imports: [CommonModule, AngularRoutingModule],
  exports: [AngularComponent],
})
export class AngularModule {}
