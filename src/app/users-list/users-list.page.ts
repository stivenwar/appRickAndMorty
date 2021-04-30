import { Component, OnInit } from '@angular/core';
import { PetitionApiService} from '../services/petition-api.service';
import {Users} from '../interfaces/interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  characters: Users[];

  constructor(private service : PetitionApiService) { }

  ngOnInit() {
     this.service.getApiRickAndMorty().subscribe( res  =>  {
        this.characters = res.results;
        
    })
  }

}
