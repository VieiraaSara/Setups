import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Setup } from '../Setup';
import { Response } from '../Response';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SetupService  {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/setups`

  constructor(private http: HttpClient) { }

  getSetups(): Observable<Response<Setup[]>>{
    return this.http.get<Response<Setup[]>>(this.apiUrl)
  }

  getSetup(id:Number): Observable<Response<Setup>>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Response<Setup>>(url)
  }

  createSetups(formData : FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  removeSetup(id:number){
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url)
  }

  updateSetup(id:number,formData:FormData): Observable<FormData>{
    const url = `${this.apiUrl}/${id}`
    return this.http.put<FormData>(url, formData)
  }

}
