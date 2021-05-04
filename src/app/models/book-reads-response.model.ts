export interface DetailedBookResponse {
  _embedded: Embedded;
  _links: DetailedBookResponseLinks;
}

export interface Embedded {
  reads: Read[];
}

export interface Read {
  bookId: number;
  rate: number;
  review: string;
  readDate: Date;
  book: ReadBook;
  userId: number;
  userName: string;
  id: number;
  _links: ReadLinks;
}

export interface ReadLinks {
  self: Self;
  read: ReadClass;
  book: ReadClass;
  user: Self;
}

export interface ReadClass {
  href: string;
  templated: boolean;
}

export interface Self {
  href: string;
}

export interface ReadBook {
  title: string;
  author: string;
  readCount: number;
  bookRate: number;
}

export interface DetailedBookResponseLinks {
  self: Self;
}
