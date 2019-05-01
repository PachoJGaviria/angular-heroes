import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

export class BaseHeroesComponent {

  heroes: Hero[] = [];

  constructor(protected heroService: HeroService) { }

  /**
   * Get the heroes
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
