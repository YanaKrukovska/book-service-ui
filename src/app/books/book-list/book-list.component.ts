import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {BookElement} from '../../models/book-response.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit, OnDestroy {

  books: BookElement[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.dataStorageService.getAllBooks().subscribe(data => {
      this.books = data._embedded.books;
    });
  }

  ngOnDestroy(): void {
  }

  getBooks(): void {
    this.dataStorageService.getAllBooks().subscribe(data => {
      this.books = data._embedded.books;
    });
  }
}
