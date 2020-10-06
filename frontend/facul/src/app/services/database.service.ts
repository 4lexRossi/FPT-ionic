import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  baseUrl = 'https://pokeapi.co/api/v2';
  imageUrl = 'https //raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {

  }
  getUser(offset = 0){
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=25`).pipe(
      map( result => {
        return result['results'];
      })
    )
  }
  getUserImage(index) {
    return `${this.imageUrl}${index}.png`;
  }
}
