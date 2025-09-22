import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Salida } from '../interfaces/salidas.interface';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

const baseUrl =  environment.apibaseUrl;
@Injectable({
  providedIn: 'root'
})
export class SalidasService {

    private http=inject(HttpClient);
  


  private listEntradas: Salida[] = [];

  getAll(): Observable<any> {
    return this.http.get<Salida[]>(`${baseUrl}/Salidas/get_list.php`,{
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }

  create(entrada: Salida): Observable<any> {
    return this.http.post<Salida>(`${baseUrl}/Salidas/crear.php`, entrada,{
      headers:{
        'Content-Type': 'application/json'
      }
    })}
 

}
