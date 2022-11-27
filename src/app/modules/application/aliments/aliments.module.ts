import { AvailableTagComponent } from './../../../shared/available-tag/available-tag.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentRoutingModule } from './aliments-routing.module';
import { AlimentComponent } from './aliments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlimentComponent],
  imports: [CommonModule, AlimentRoutingModule, ReactiveFormsModule],
  exports: [AlimentComponent],
})
export class AlimentModule { }
