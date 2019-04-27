import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getHero();
  }

  /**
   * Get the hero from the url`s params
   */
  getHero(): void {
    const heroId: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(heroId)
      .subscribe(hero => this.hero = hero);
  }


  /**
   * Go back in the platform's history.
   */
  goBack(): void {
    this.location.back();
  }
}
