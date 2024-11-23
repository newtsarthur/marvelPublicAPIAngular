import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import md5 from 'md5';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  private publicKey = 'de4919bce01bf7509d8f3486f4c3a930';
  private privateKey = '4ce75dd67836027ac5779471b2b620bc4b16ec6d';
  private baseUrl = 'http://gateway.marvel.com/v1/public/comics?';

  constructor(private http: HttpClient) {}

  getComics(): Observable<any[]> {
    const timestamp = new Date().getTime().toString();
    const hash = md5(timestamp + this.privateKey + this.publicKey);

    const apiUrl = `${this.baseUrl}ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}&limit=100`;

    return this.http.get<any[]>(apiUrl);
  }
}
