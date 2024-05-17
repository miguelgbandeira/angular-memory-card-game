import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCharacter(name: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("name", name);
    searchParams = searchParams.append("type", "figure");
    return this.http.get("https://www.amiiboapi.com/api/amiibo/", {params: searchParams})

  }
}
