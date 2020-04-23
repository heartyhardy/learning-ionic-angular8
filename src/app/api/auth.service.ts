import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStorage } from './user.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  checkUserToken(token: UserStorage):Observable<any>{
    return this.http.get<any[]>(this.authUrl)
      .pipe(
        map(users => users.find(u => u.username === token.id)),
        catchError(this.handleError<any>(`get token id=${token.id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}

