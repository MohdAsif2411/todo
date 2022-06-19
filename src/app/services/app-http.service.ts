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

  get(resourceUrl: string) {
    return this.http.get(`${this.appUrl}${resourceUrl}`);
  }

  getPage(resourceUrl: string) {
    const response = this.http.get(`${this.appUrl}${resourceUrl}`, { observe: 'response' });
    return response.pipe(
      map(x => ({ items: x.body, total_count: x.headers.get('X-Total-Count') }))
    );
  }

  put(resourceUrl: string, form: any) {
    let response;
    if (form.id > 0) {
      response = this.http.put(`${this.appUrl}${resourceUrl}/${form.id}`, form);
    } else {
      response = this.http.post(`${this.appUrl}${resourceUrl}`, form);
    }
    return response;
  }

}
