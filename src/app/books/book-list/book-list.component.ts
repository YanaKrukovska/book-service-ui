import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {Book} from '../../models/book-response.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {

  books: Book[];
  page = 1;
  count = 0;
  tableSize = 7;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.dataStorageService.getAllBooks().subscribe(data => {
      this.books = data._embedded.books;
    });
  }

  getBooks(): void {
    this.dataStorageService.getAllBooks().subscribe(data => {
      this.books = data._embedded.books;
    });
  }

  onTableDataChange(event): void {
    this.page = event;
    this.getBooks();
  }

}
