import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent {

  public message2: string;

  constructor () {
    this.message2 = 'Generation des pokemons';
  }
}

