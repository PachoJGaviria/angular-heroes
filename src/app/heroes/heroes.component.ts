import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Array<Hero>;

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  /**
   * Get the heroes
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  /**
   * Process the select hero event
   * @param hero the selected hero
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
