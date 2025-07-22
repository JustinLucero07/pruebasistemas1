import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversidadserviceService {

  private apiUrl = 'http://localhost:8080/upd.edu.ec/api/universidades'; 

  constructor(private http: HttpClient) {}

  listarUniversidades(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearUniversidad(universidad: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, universidad, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  actualizarUniversidad(id: number, universidad: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, universidad, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  eliminarUniversidad(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
