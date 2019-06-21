import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  {
    path: 'login',
    redirectTo: 'login',
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
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule', canActivate: [AuthGuard] },
  { path: 'task', loadChildren: './task/task.module#TaskPageModule', canActivate: [AuthGuard] },
  { path: 'filtertask', loadChildren: './filtertask/filtertask.module#FiltertaskPageModule', canActivate: [AuthGuard] },
  { path: 'progress', loadChildren: './progress/progress.module#ProgressPageModule' , canActivate: [AuthGuard]},
  { path: 'summary', loadChildren: './summary/summary.module#SummaryPageModule', canActivate: [AuthGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule', canActivate: [AuthGuard]  },
  { path: 'priority', loadChildren: './priority/priority.module#PriorityPageModule', canActivate: [AuthGuard] },
  { path: 'date', loadChildren: './date/date.module#DatePageModule', canActivate: [AuthGuard] },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksPageModule', canActivate: [AuthGuard] },
  { path: 'task-details/:id', loadChildren: './task-details/task-details.module#TaskDetailsPageModule', canActivate: [AuthGuard] },
  { path: 'update', loadChildren: './update/update.module#UpdatePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
