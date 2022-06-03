import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { APIResponse,Pizza } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(public http: HttpClient) 
  {

  }

  public getPizzaList( search?: string): Observable<APIResponse<Pizza>> {
    let params = new HttpParams()
    if(search){
      params = new HttpParams().set('search',search)
    }
    return this.http.get<APIResponse<Pizza>>(`${environment.BASE_URL}pizza`,{params})
  }

  
}
