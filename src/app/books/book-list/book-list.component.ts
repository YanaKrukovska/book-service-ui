import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {Book} from '../../models/book-response.model';
import {TokenStorageService} from '../../shared/token-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UpdateBookListService} from '../../shared/book-list-update.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit, OnDestroy {

  private readonly defaultSortMethod = 'Date added';
  private deleteBookUpdate: Subscription;
  private loggedInUpdate: Subscription;

  books: Book[];
  page = 1;
  count = 0;
  tableSize = 5;
  addBookForm: FormGroup;

  isAdmin = false;
  isAddingNewBook = false;

  currentSorting: string;
  sortingOptions: any = [this.defaultSortMethod, 'Title', 'Rating', 'Read count'];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService,
              private tokenStorageService: TokenStorageService,
              private updateBookListService: UpdateBookListService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    if (!!this.tokenStorageService.getToken()) {
      this.isAdmin = this.tokenStorageService.getUser().roles.includes('ROLE_ADMIN');
    }
    this.getBooksSorted(this.defaultSortMethod);
    this.initForm();

    this.deleteBookUpdate = this.updateBookListService.getUpdate().subscribe(() => {
      this.page = 1;
      this.getBooksSorted(this.defaultSortMethod);
    });

    this.loggedInUpdate = this.authService.getAdminLoggedIn().subscribe(
      (isLoggedIn) => {
        this.isAdmin = isLoggedIn;
      }
    );

  }

  ngOnDestroy(): void {
    this.deleteBookUpdate.unsubscribe();
    this.loggedInUpdate.unsubscribe();
  }

  getBooksSorted(sortType: string): void {
    switch (sortType) {
      case 'Rating':
      case 'Read count':
        this.dataStorageService.getBooksSortedBy(sortType).subscribe(data => {
          this.books = data._embedded.books;
        });
        break;
      case 'Title':
        this.dataStorageService.getBooksSortedByTitle().subscribe(data => {
          this.books = data._embedded.books;
        });
        break;
      case this.defaultSortMethod:
        this.dataStorageService.getAllBooks().subscribe(data => {
          this.books = data._embedded.books;
        });
        break;
    }
  }

  onTableDataChange(event): void {
    this.page = event;
    this.getBooksSorted(this.currentSorting);
  }

  enableAddForm(): void {
    this.isAddingNewBook = true;
  }

  onSubmit(): void {
    this.dataStorageService.createNewBook(this.addBookForm.value.title, this.addBookForm.value.author)
      .subscribe(
        () => {
          this.getBooksSorted(this.defaultSortMethod);
        }
      );
    this.onCancel();
  }

  private initForm(): void {
    this.addBookForm = new FormGroup({
      title: new FormControl('', Validators.minLength(1)),
      author: new FormControl('', Validators.minLength(1)),
    });
  }

  onCancel(): void {
    this.isAddingNewBook = false;
    this.addBookForm.reset();
  }

  onOptionsSelected(value: string): void {
    this.currentSorting = value;
    this.getBooksSorted(value);
  }

}
