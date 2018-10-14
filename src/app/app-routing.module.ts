import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromUsers from './components/users';

const enableTracing = true && !environment.production;

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users',
    children: [
      {path: '', component: fromUsers.UserListComponent, pathMatch: 'full'},
      {path: 'new', component: fromUsers.UserNewComponent},
      {path: ':user_id', component: fromUsers.UserDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

