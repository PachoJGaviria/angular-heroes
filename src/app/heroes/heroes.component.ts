import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../model/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Array<Hero> = HEROES;

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Process the select hero event
   * @param hero the selected hero
   */
  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

}
