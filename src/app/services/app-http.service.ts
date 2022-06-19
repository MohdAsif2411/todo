import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  private appUrl?: string;

  constructor(private http: HttpClient) {

    this.appUrl = environment.AppUrl;
  }

  get<T>(resourceUrl: string) {
    return this.http.get<T>(`${this.appUrl}${resourceUrl}`);
  }

  getPage<T>(resourceUrl: string) {
    const response = this.http.get<T>(`${this.appUrl}${resourceUrl}`, { observe: 'response' });
    return response.pipe(
      map(x => ({ items: x.body, total_count: x.headers.get('X-Total-Count') }))
    );
  }

  put<T>(resourceUrl: string, form: any) {
    let response;
    if (form.id > 0) {
      response = this.http.put<T>(`${this.appUrl}${resourceUrl}/${form.id}`, form);
    } else {
      response = this.http.post<T>(`${this.appUrl}${resourceUrl}`, form);
    }
    return response;
  }

}
