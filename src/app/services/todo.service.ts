import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';
import { NotyService } from './noty.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: AppHttpService) { }

  put<T>(form: any) {
    const response = this.http.put('todo', form);

    return response;
  }

  getPage<T>(page: number = 1, pageSize: number = 10, sortField?: string, sortOrder: string = 'asc', search?: string) {
    const response = this.http.getPage<T>(`todo?_page=${page}&_limit=${pageSize}&_sort=${sortField}&_order=${sortOrder}`);
    return response;
  }

  get<T>(id: number) {
    const response = this.http.get<T>(`todo/${id}`);
    return response;
  }

  delete(id: number){
    return this.http.delete(`todo/${id}`);
  }

}
