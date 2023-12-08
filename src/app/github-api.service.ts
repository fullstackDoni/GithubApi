import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    const url = `${this.apiUrl}/users`;
    return this.http.get<any[]>(url);
  }

  searchUsers(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/users?q=${query}`;
    return this.http.get<any>(url);
  }
}
