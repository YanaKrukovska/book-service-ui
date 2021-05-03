import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookElement} from '../../models/book-response.model';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: BookElement;
  id: number;

  constructor(private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];

          this.dataStorageService.getBookById(this.id).subscribe(data => {
            for (const book of data._embedded.books) {
              if (book.id === this.id) {
                this.book = book;
              }
            }
          });
        }
      );
  }

}
