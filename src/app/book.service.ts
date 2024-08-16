import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private serverUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  // books:[] = []
  getBooks = () => {
    return this.http
      .get(`${this.serverUrl}/books`)
      .pipe(tap((data) => console.log(data)));
  };
}
