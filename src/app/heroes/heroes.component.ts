import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { BaseHeroesComponent } from '../cross-component/base.component';
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
    this.router.navigate([`detail/${hero.id}`], {});
  }

}
