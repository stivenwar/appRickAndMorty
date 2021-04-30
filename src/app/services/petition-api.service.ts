import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class PetitionApiService {

  readonly urlRickAndMorty = 'https://rickandmortyapi.com/api/character';
  
  constructor(private http: HttpClient) { 

  }
  
  getApiRickAndMorty(){
      return this.http.get<Users>(this.urlRickAndMorty);
  }
  getApiRickAndMortyById(id:string){
    return this.http.get(this.urlRickAndMorty+'/'+id)
  }
 
}
