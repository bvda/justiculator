import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { CoincapResponse, CryptoApiService } from './crypto-api.service';
import { FrankfurterApiResponse, FrankfurterApiService } from './frankfurter-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'justiculator';
  prices$: Observable<FrankfurterApiResponse>;
  crypto$: Observable<CoincapResponse>

  constructor(private frankfurter: FrankfurterApiService, private crypto: CryptoApiService) {
    this.prices$ = this.frankfurter.getCurrencies()
    this.crypto$ = this.crypto.getBitcoin()
  }
}
