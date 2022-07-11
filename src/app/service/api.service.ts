import { Pokemon } from './../interfaces/Pokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Observable, of, throwError } from 'rxjs';
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

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.wisemenPokeApiUrl).pipe(retry(3), catchError(this.handleError));
  }
  getPokemonById(id: number): Observable<Pokemon> {
    const url = `this.pokeApiUrl/${id}`;
    const pokemon = this.http.get<Pokemon>(url);
    return pokemon;
  }
  getPokemonByName(name: string) {
    const url = `this.pokeApiUrl/${name}`;
    return this.http.get(url);
  }

  searchPokemon(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.pokeApiUrl}/?name=${term})`);
  }
}
