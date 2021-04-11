import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './views/user-login/user-login.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user-login', component: UserLoginComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'search/:search', component: SearchComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'find',
    loadChildren: () => import('./views/find/find.module').then( m => m.FindPageModule)
  },
  {
    path: 'find',
    redirectTo: 'find',
    pathMatch: 'full'
  },

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
