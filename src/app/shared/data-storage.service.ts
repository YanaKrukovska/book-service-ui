import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BookResponse} from '../models/book-response.model';
import {DetailedBookResponse} from '../models/book-reads-response.model';
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
}
