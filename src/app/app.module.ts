import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookStartComponent } from './books/books-start/book-start.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import {DataStorageService} from './shared/data-storage.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {DropdownDirective} from './shared/dropdown.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShelfComponent } from './shelf/shelf.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookStartComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    DropdownDirective,
    ShelfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
