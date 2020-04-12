import { RouteGuardService } from './service/route-guard.service';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path : 'welcome/:name' , component : WelcomeComponent,canActivate:[RouteGuardService]},
  { path : 'todos/:id' , component : TodoComponent,canActivate:[RouteGuardService]},
  { path : 'login' , component : LoginComponent},
  { path : '' , component : LoginComponent },
  { path : 'todos' , component : ListTodosComponent,canActivate:[RouteGuardService]},
  { path : 'logout' , component : LogoutComponent},
  { path : '**' , component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
