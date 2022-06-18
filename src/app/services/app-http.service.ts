<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs'
=======
import { Injectable } from '@angular/core';
>>>>>>> 69d8a7adad2d5a4677012ac6cb18eed9b9817656

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
