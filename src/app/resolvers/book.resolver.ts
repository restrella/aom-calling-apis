import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookService } from '../book.service';

@Injectable({
  providedIn: 'root',
})
export class BookResolver implements Resolve<Object> {
  constructor(private bookService: BookService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Object> {
    // return of(['Jose', 'Mike']);
    return this.bookService.getBooks();
  }
}
