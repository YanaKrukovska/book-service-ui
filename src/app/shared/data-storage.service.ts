import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BookResponse} from '../models/book-response.model';
import {DetailedBookResponse, NewRead, Read} from '../models/book-reads-response.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {
  }

  books: any;
  bookResponse: BookResponse;

  getAllBooks(): Observable<BookResponse> {
    return this.http.get<BookResponse>('http://localhost:8041/books');
  }

  getBookDetailsById(id: number): Observable<DetailedBookResponse> {
    return this.http.get<DetailedBookResponse>(
      'http://localhost:8041/reads/search/findByBookId',
      {params: new HttpParams().set('id', String(id)).set('projection', 'view')});
  }

  postNewReview(newReview: NewRead): Observable<NewRead> {
    return this.http.post<NewRead>('http://localhost:8041/reads', newReview);
  }

  getReviewsByUser(userId: number): Observable<DetailedBookResponse> {
    return this.http.get<DetailedBookResponse>('http://localhost:8041/reads/search/findByUserId',
      {params: new HttpParams().set('id', String(userId))});
  }
}
