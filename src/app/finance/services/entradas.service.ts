import { inject, Injectable } from '@angular/core';
import { Entrada } from '../interfaces/entradas.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map, Observable, tap } from 'rxjs';

const baseUrl =  environment.apibaseUrl;
@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  private http=inject(HttpClient);
  


  private listEntradas: Entrada[] = [];

  getAll(): Observable<any> {
    return this.http.get<Entrada[]>(`${baseUrl}/Entrada/get_list.php`,{
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }

  create(entrada: Entrada): Observable<any> {
    return this.http.post<Entrada>(`${baseUrl}/Entrada/crear.php`, entrada,{
      headers:{
        'Content-Type': 'application/json'
      }
    })}
 
  

  

}
