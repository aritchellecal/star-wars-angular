import { async } from '@angular/core/testing';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})


export class CharactersComponent implements OnInit {
  faStar = faStar;
  isFavorite = false;
  heroList: null;
  constructor(private character: CharactersService) { 
  }

  ngOnInit(){
    this.fetchCharacter();
  }


  fetchCharacter= () => {
    this.character.loadData().subscribe((res: any) => {
    this.heroList = res.results
    })
  };

  addTofavorite() {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite)
  }

  
}
