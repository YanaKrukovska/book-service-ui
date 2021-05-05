import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {NewRead, Read, ReadBook, ReadLinks} from '../../models/book-reads-response.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../shared/token-storage.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: ReadBook;
  reviews: Read[];
  id: number;
  isAdding = false;
  addReviewForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,
              private dataStorageService: DataStorageService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.initForm();
          this.updateBookInformation();
        }
      );
  }

  private updateBookInformation(): void {
    this.dataStorageService.getBookDetailsById(this.id).subscribe(data => {
      this.book = data._embedded.reads[0].book;
      this.reviews = data._embedded.reads;
    });
  }

  enableAddForm(): void {
    this.isAdding = true;
  }

  onSubmit(): void {
    const newReview: NewRead = {
      rate: this.addReviewForm.value.stars,
      review: this.addReviewForm.value.review,
      readDate: this.addReviewForm.value.readDate,
      book: 'http://localhost:8041/books/' + this.id,
      user: 'http://localhost:8041/users/' + this.tokenStorageService.getUserId()
    };
    this.dataStorageService.postNewReview(newReview).subscribe(
      () => {
        this.updateBookInformation();
      }
    );
    this.onCancel();
  }


  private initForm(): void {
    this.addReviewForm = new FormGroup({
      review: new FormControl('', Validators.required),
      stars: new FormControl('', Validators.required),
      readDate: new FormControl('', Validators.required)
    });
  }

  onCancel(): void {
    this.isAdding = false;
    this.addReviewForm.reset();
  }
}
