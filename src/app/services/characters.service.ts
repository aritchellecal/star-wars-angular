import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url ='https://swapi.co/api';

  constructor(private http: HttpClient) { }

  // getCharacter(): Observable<Character[]> {
  //   return this.http.get<Character[]>(this.url + /people/)
  //   .pipe(catchError((error?: any)=> Observable
  //   .throw(error.json())
  //   ))
  // }

  loadData=()=> {
    return this.http.get(this.url + /people/)
  }

}
