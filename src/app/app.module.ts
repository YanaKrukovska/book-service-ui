import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BooksComponent} from './books/books.component';
import {BookStartComponent} from './books/books-start/book-start.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookItemComponent} from './books/book-list/book-item/book-item.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {DataStorageService} from './shared/data-storage.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShelfComponent} from './shelf/shelf.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {authInterceptorProviders} from './shared/auth.interceptor';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookStartComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    ShelfComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    DataStorageService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
