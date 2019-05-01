import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { BaseHeroesComponent } from '../cross-component/base-heroes.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseHeroesComponent implements OnInit {

  constructor(protected heroService: HeroService) {
    super(heroService);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
