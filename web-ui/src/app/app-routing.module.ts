import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutingConstants} from './constants/routing.constants';
import {MainComponent} from './modules/main/main.component';


const routes: Routes = [
  {path: RoutingConstants.MAIN, component: MainComponent, pathMatch: 'full'},
  {
    path: RoutingConstants.UPLOADING,
    loadChildren: () => import('./modules/uploading/uploading.module').then(module => module.UploadingModule)
  },
  {
    path: RoutingConstants.ANIMATION,
    loadChildren: () => import('./modules/animation/animation.module').then(module => module.AnimationModule)
  },
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
