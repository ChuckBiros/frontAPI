import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/application/angular/angular.module').then(
        (mod) => mod.AngularModule
      ),
  },
  {
    path: 'plats',
    loadChildren: () =>
      import('./modules/application/angular/angular.module').then(
        (mod) => mod.AngularModule
      ),
  },
  {
    path: 'aliments',
    loadChildren: () =>
      import('./modules/application/aliments/aliments.module').then(
        (mod) => mod.AlimentModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./modules/general/signup/signup.module').then(
        (mod) => mod.SignupModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/general/login/login.module').then(
        (mod) => mod.LoginModule
      ),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  /*  imports: [RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    })],*/
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
