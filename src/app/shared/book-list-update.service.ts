import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UpdateBookListService {

  private listUpdate = new Subject<any>();

  sendUpdate(): void {
    this.listUpdate.next(true);
  }

  getUpdate(): Observable<any> {
    return this.listUpdate.asObservable();
  }
}
