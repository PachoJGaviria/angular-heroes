import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api/interfaces';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  /**
   * Create the db in memory
   * @returns Hero[]
   */
  createDb() {
    const heroes: Hero[] = [
      Hero.createNewHero('Windstorm', 1),
      Hero.createNewHero('Mr. Nice', 2),
      Hero.createNewHero('Narco', 3),
      Hero.createNewHero('Bombasto', 4),
      Hero.createNewHero('Celeritas', 5),
      Hero.createNewHero('Magneta', 6),
      Hero.createNewHero('RubberMan', 7),
      Hero.createNewHero('Dynama', 8),
      Hero.createNewHero('Dr IQ', 9),
      Hero.createNewHero('Magma', 10),
      Hero.createNewHero('Tornado', 11),
      Hero.createNewHero('001', 12)
    ];
    return { heroes };
  }

  /**
   * Get the next id for a new record.
   * If the heroes array is empty, return 1
   * if the heroes array is not empty, returns 1 + the highest hero id.
   * @param heroes List of heroes
   */
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ?
      1 + Math.max(...heroes.map(hero => hero.id)) : 1;
  }
}
