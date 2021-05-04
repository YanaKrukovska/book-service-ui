import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {Read, ReadBook} from '../../models/book-reads-response.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: ReadBook;
  reviews: Read[];
  id: number;

  constructor(private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.dataStorageService.getBookDetailsById(this.id).subscribe(data => {
            this.book = data._embedded.reads[0].book;
            this.reviews = data._embedded.reads;
          });
        }
      );
  }

}
