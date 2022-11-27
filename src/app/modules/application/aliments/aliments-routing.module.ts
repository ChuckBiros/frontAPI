import { NgModule } from '@angular/core';
import { Routes, RouterModule, ResolveFn } from '@angular/router';
import { AlimentAddComponent } from './aliment-add/aliment-add.component';
import { AlimentDetailComponent } from './aliment-detail/aliment-detail.component';

import { AlimentComponent } from './aliments.component';

const routes: Routes = [
  {
    path: '', component: AlimentComponent,
    children: [
      {
        path: 'add', component: AlimentAddComponent

      },
      {
        path: 'detail', component: AlimentDetailComponent

      }
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentRoutingModule { }