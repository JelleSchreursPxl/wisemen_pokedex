import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private wisemenPokeApiUrl = 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
  private pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown Error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getPokemon() {
    return this.http.get(this.wisemenPokeApiUrl).pipe(retry(3), catchError(this.handleError));
  }
  getPokemonDetail(id: number) {
    return this.http.get(this.pokeApiUrl + `/${id}`);
  }
}
