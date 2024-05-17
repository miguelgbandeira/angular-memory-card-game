import { Component, OnInit } from '@angular/core';
import {ApiService} from "./api.service";
import {Character} from "./character.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  charactersNames = [
    "mario",
    "peach",
    "luigi",
    "toad",
    "yoshi",
    "wario",
    "donkey kong",
    "diddy kong",
    "waluigi",
    "daisy",
    "bowser jr.",
    "boo",
  ];
  fetchedCharacters: Character[] = [];
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.charactersNames.map(char => {
      this.apiService.fetchCharacter((char))
        .subscribe(res => {
          const formatedRes = res["amiibo"][0];
          const char: Character = new Character(formatedRes.character, formatedRes.image);
          this.fetchedCharacters.push(char);
      })
    })

    }

}
