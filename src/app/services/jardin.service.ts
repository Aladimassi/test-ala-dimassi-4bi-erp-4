import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jardin } from '../models/jardin';

@Injectable({
  providedIn: 'root'
})
export class JardinService {
  url = "http://localhost:3000/jardins/";
  
  constructor(private http: HttpClient) { }

  addJardin(jardin: Jardin): Observable<Jardin> {
    return this.http.post<Jardin>(this.url, jardin);
  }

  getAllJardin(): Observable<Jardin[]> {
    return this.http.get<Jardin[]>(this.url);
  }

  getJardinById(id: string): Observable<any> {
    return this.http.get<any>(this.url + id);
  }

  updateJardin(id: string, jardin: Jardin): Observable<any> {
    return this.http.put<any>(this.url + id, jardin);
  }

  deleteJardin(id: string): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }
}
