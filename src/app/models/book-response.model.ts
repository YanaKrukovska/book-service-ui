export interface BookResponse {
  _embedded: Embedded;
  _links: BookResponseLinks;
  page: Page;
}

export interface Embedded {
  books: Book[];
}

export interface Book {
  readCount: number;
  bookRate: number;
  author: string;
  title: string;
  id: number;
  _links: BookLinks;
}

export interface BookLinks {
  self: Profile;
  book: LinksBook;
}

export interface LinksBook {
  href: string;
  templated: boolean;
}

export interface Profile {
  href: string;
}

export interface BookResponseLinks {
  self: Profile;
  profile: Profile;
  search: Profile;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
