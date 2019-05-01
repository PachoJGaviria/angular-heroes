import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { BaseHeroesComponent } from '../cross-component/base-heroes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent extends BaseHeroesComponent implements OnInit {

  constructor(protected heroService: HeroService, private router: Router) {
    super(heroService);
  }

  ngOnInit() {
    this.getHeroes();
  }

  /**
   * Process the select hero event
   * @param hero the selected hero
   */
  onSelect(hero: Hero): void {
    if (this.heroes.find(h => h.id === hero.id)) {
      this.router.navigate([`detail/${hero.id}`], {});
    }
  }

  /** create a new hero on the server and then add to current list of heroes */
  add(heroName: string): void {
    if (!heroName || !heroName.trim()) {
      return;
    }
    const hero: Hero = Hero.createNewHero(heroName.trim());
    this.heroService.createHero(hero)
      .subscribe((newHero: Hero) => this.heroes.push(newHero));
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero)
      .subscribe(() =>
        this.heroes = this.heroes.filter(h => h.id !== hero.id)
      );
  }
}
