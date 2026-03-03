import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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
    return this.http.get<Jardin[]>(this.url).pipe(
      map(jardins => jardins.map(j => ({
        ...j,
        id: typeof j.id === 'string' ? parseInt(j.id) : j.id
      })))
    );
  }

  getJardinById(id: number): Observable<any> {
    return this.http.get<any>(this.url + id).pipe(
      map(jardin => ({
        ...jardin,
        id: typeof jardin.id === 'string' ? parseInt(jardin.id) : jardin.id
      }))
    );
  }

  updateJardin(id: number, jardin: Jardin): Observable<any> {
    return this.http.put<any>(this.url + id, jardin);
  }

  deleteJardin(id: number): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }
}
