import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';
import { NotyService } from './noty.service';

@Injectable({
  providedIn: 'root'
})
export class todoService {

  constructor(private http: AppHttpService) { }

  put(form: any) {
    const response = this.http.put('todo', form);

    return response;
  }

  getPage(page: number = 1, pageSize: number = 10, sortField?: string, sortOrder: string = 'asc', search?: string) {
    const response = this.http.getPage(`todo?_page=${page}&_limit=${pageSize}&_sort=${sortField}&_order=${sortOrder}`);
    return response;
  }

  get(id: number) {
    const response = this.http.get(`todo/${id}`);
    return response;
  }

}
