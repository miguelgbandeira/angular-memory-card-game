import { Component, Input } from '@angular/core';
import {Character} from "../character.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() character: Character


}
