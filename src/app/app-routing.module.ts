import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {BookStartComponent} from './books/books-start/book-start.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {BooksResolverService} from './books/books-resolver.service';
import {ShelfComponent} from './shelf/shelf.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {
    path: 'books',
    component: BooksComponent,
    children: [
      {path: '', component: BookStartComponent},
      {
        path: ':id',
        component: BookDetailComponent,
        resolve: [BooksResolverService]
      },
    ]
  },
  {
    path: 'shelf',
    component: ShelfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
