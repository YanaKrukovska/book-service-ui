export class BookResponse {
  _embedded: Embedded;
  _links: BookResponseLinks;
  page: Page;


  get embedded(): Embedded {
    return this._embedded;
  }
}

export class Embedded {
  books: BookElement[];
}

export class BookElement {
  readCount: number;
  bookRate: number;
  author: string;
  title: string;
  id: number;
  _links: BookLinks;
}

export class BookLinks {
  self: Profile;
  book: LinksBook;
}

export class LinksBook {
  href: string;
  templated: boolean;
}

export class Profile {
  href: string;
}

export class BookResponseLinks {
  self: Profile;
  profile: Profile;
  search: Profile;
}

export class Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
