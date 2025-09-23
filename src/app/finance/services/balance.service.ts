import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';

const baseUrl= environment.apibaseUrl;

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private http=inject(HttpClient);

  getBalance(){
    return this.http.get<any>(`${baseUrl}/Grafica/grafica.php`,{
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }


  
}
