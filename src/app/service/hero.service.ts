import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

/**
 * Hero service
 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /**
   * Constructor
   * @param messagesService Messages service
   */
  constructor(private messagesService: MessagesService) { }

  /**
   * Get an observable of heroes
   */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add('Hero service: fetched heroes');
    return of(HEROES);
  }
}
