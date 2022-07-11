import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  configuration_Url = 'assets/config.json';
  getConfiguration() {
    return this.http.get(this.configuration_Url);
  }
}
