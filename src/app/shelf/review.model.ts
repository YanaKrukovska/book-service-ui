import {Book} from '../books/book.model';

export class Review {
  constructor(public book: Book, public readDate: Date, public rate: number, public review: string) {
  }
}
