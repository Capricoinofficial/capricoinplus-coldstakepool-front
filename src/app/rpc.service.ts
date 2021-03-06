import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RpcService {

  constructor(private http: HttpClient) { }

  get url(): string {
    return `${environment.url}${environment.testnet ? '' : ''}`;
  }
  // Uses http.get() to load data from a single API endpoint
  getConfig() {
    return this.http.get(`${this.url}/api/config`);
  }

  getJson() {
    return this.http.get(`${this.url}/api/json`);
  }

  getMetrics() {
    return this.http.get(`${this.url}/api/json/metrics`);
  }
}
