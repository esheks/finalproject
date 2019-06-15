import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule' },
  { path: 'task', loadChildren: './task/task.module#TaskPageModule', canActivate: [AuthGuard] },
  { path: 'filtertask', loadChildren: './filtertask/filtertask.module#FiltertaskPageModule', canActivate: [AuthGuard] },
  { path: 'progress', loadChildren: './progress/progress.module#ProgressPageModule' , canActivate: [AuthGuard]},
  { path: 'summary', loadChildren: './summary/summary.module#SummaryPageModule', canActivate: [AuthGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
