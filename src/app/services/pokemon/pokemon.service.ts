import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons(offset = 0, limit = 20): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?offset=${offset}&limit=${limit}`).pipe(
      catchError(error => {
        console.error('Erro ao buscar Pokémon:', error);
        throw error;
      })
    );
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${name}`).pipe(
      catchError(error => {
        console.error('Erro ao buscar detalhes do Pokémon:', error);
        throw error;
      })
    );
  }
}