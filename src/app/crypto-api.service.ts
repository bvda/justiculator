import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {

  constructor(private http: HttpClient) { }

  getBitcoin(): Observable<any> {
    return this.http.get<CoincapResponse>('https://api.coincap.io/v2/assets')
  }
}

export interface CoincapResponse {
  data: Asset[]
}

interface Asset {
  id: string
  symbol: string
  name: string
  priceUsd: number
}