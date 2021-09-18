import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrankfurterApiService {

  constructor(private http: HttpClient) { 

  }

  getCurrencies(): Observable<FrankfurterApiResponse> {
    return this.http.get<FrankfurterApiResponse>('https://api.frankfurter.app/latest?from=USD')
  }
}


export interface FrankfurterApiResponse {
  amount: number
  base: string
  date: string
  rates: string[]
}