import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {DataStorageService} from '../shared/data-storage.service';
import {Book} from './book.model';

@Injectable({providedIn: 'root'})
export class BooksResolverService implements Resolve<Book[]> {
  books: any;

  constructor(private dataStorageService: DataStorageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.dataStorageService.getAllBooks().subscribe(data => {
      this.books = data._embedded.books;
    });
    return this.books;
  }
}
