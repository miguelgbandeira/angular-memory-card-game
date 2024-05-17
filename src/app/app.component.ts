import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  fetchedCharacters = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.charactersNames.map(char => {
      this.fetchCharacters(char);
    })

    }

  fetchCharacters(name: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("name", name);
    searchParams = searchParams.append("type", "figure");
    return this.http.get("https://www.amiiboapi.com/api/amiibo/", {params: searchParams})
      .subscribe(res => {
        this.fetchedCharacters.push(res["amiibo"][0])
      })
  }
}
