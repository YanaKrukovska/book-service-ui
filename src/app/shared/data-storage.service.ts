import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Book, BookResponse} from '../models/book-response.model';
import {DetailedBookResponse, NewRead} from '../models/book-reads-response.model';
import {Observable} from 'rxjs';

const apiUrl = 'http://localhost:8041/';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {
  }

  books: any;
  bookResponse: BookResponse;

  getAllBooks(): Observable<BookResponse> {
    return this.http.get<BookResponse>(apiUrl + 'books');
  }

  getBooksSortedBy(type: string): Observable<BookResponse> {
    let params = new HttpParams();
    params = type === 'Rating' ? params.append('sort', 'bookRate,desc')
      : params.append('sort', 'readCount,desc');
    params = params.append('sort', 'title,asc');
    return this.http.get<BookResponse>(apiUrl + 'books',
      {params});
  }

  getBooksSortedByTitle(): Observable<BookResponse> {
    return this.http.get<BookResponse>(apiUrl + 'books',
      {params: new HttpParams().set('sort', 'title,asc')});
  }

  createNewBook(title: string, author: string): Observable<any> {
    return this.http.post(apiUrl + 'books', {title: title, author: author});
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${apiUrl}books/${id}`);
  }

  getBookDetailsById(id: number): Observable<DetailedBookResponse> {
    return this.http.get<DetailedBookResponse>(
      apiUrl + 'reads/search/findByBookId',
      {params: new HttpParams().set('id', String(id)).set('projection', 'view')});
  }

  postNewReview(newReview: NewRead): Observable<NewRead> {
    return this.http.post<NewRead>(apiUrl + 'reads', newReview);
  }

  getReviewsByUser(userId: number): Observable<DetailedBookResponse> {
    return this.http.get<DetailedBookResponse>(apiUrl + 'reads/search/findByUserId',
      {params: new HttpParams().set('id', String(userId))});
  }

  deleteReview(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}reads/${id}`);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}books/${id}`);
  }
}
