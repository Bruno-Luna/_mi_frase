import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frase } from '../model/model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceGlobalService {

  public baseUrl = "http://localhost:3000/frases"
  constructor(
    private http: HttpClient
  ) { }

  public create(frase: Frase): Observable<Frase>{
    return this.http.post<Frase>(this.baseUrl, frase)
  }

  public getAllFrases():Observable<Frase[]>{
    return this.http.get<Frase[]>(this.baseUrl)
  }

  public getByIdFrase(id: number):Observable<Frase>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Frase>(url)
  }

  public edit(frase: Frase): Observable<Frase>{
    const url = `${this.baseUrl}/${frase.id}`
    return this.http.put<Frase>(url, frase)
  }

  public delete(id: number):Observable<Frase>{
    return this.http.delete<Frase>(`${this.baseUrl}/${id}`)
  }
}
