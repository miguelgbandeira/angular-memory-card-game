import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  charactersNames = [
    'mario',
    'peach',
    'luigi',
    'toad',
    'yoshi',
    'wario',
    'donkey kong',
    'diddy kong',
    'waluigi',
    'daisy',
    'bowser jr.',
    'boo',
  ];
  fetchedCharacters: Character[] = [];
  shuffledCharacters = new Subject<Character[]>();

  constructor(private http: HttpClient) {}

  fetchCharacters() {
    this.charactersNames.map((char) => {
      this.fetchCharacter(char).subscribe((res) => {
        const formatedRes = res['amiibo'][0];
        const char: Character = new Character(
          formatedRes.character,
          formatedRes.image,
        );
        this.fetchedCharacters.push(char);
      });
    });
    return this.fetchedCharacters;
  }

  fetchCharacter(name: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('name', name);
    searchParams = searchParams.append('type', 'figure');
    return this.http.get('https://www.amiiboapi.com/api/amiibo/', {
      params: searchParams,
    });
  }

  shuffleArray(array) {
    // Using Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleCharacters() {
    const shuffledArray = this.shuffleArray([...this.fetchedCharacters]);
    this.shuffledCharacters.next(shuffledArray);
  }
}
