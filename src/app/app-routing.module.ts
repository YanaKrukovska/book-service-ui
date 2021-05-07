import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {BookStartComponent} from './books/books-start/book-start.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {ShelfComponent} from './shelf/shelf.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {
    path: 'books',
    component: BooksComponent,
    children: [
      {path: '', component: BookStartComponent},
      {
        path: ':id',
        component: BookDetailComponent
      },
    ]
  },
  {path: 'shelf', component: ShelfComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
