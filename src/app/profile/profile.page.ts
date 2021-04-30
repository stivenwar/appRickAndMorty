import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { Users } from '../interfaces/interface';
import { PetitionApiService } from '../services/petition-api.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId : string;
  character: Users;

  constructor(private route : ActivatedRoute,
              private service : PetitionApiService) { }

  ngOnInit() {
     this.profileId = this.route.snapshot.paramMap.get('id');
     this.service.getApiRickAndMortyById(this.profileId).subscribe( res => {
      this.character = <Users>res;
      
     });
  
    
  }

}
