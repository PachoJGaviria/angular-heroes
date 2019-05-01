import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Hero } from '../model/hero';
import { MessagesService } from './messages.service';

/** Generic: httpOptions */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
 * Hero service
 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /** URL to web API */
  private heroesUrl = 'api/heroes';

  /**
   * Constructor
   * @param messagesService Messages service
   */
  constructor(
    private messagesService: MessagesService,
    private http: HttpClient) { }

  /** Add a message in the message service */
  private log(message: string): void {
    this.messagesService.add(message);
  }

  /**
   * Handle a error in any http request. Let the app continue.
   * @param method name of the method that failed
   * @param safeResult optional value to return as the observable result
   */
  private handleError<T>(method: string, safeResult?: T) {
    return (err: any): Observable<T> => {
      // TODO: Send the error to remote logging infrastructure
      console.error(err);
      // Transforming error for user consumption
      this.log(`The operation ${method} failed. Detail: ${err.message}`);
      // Let the app keep running by returning an empty result.
      return of(safeResult as T);
    };
  }

  /**
   * GET: Get a list with all heroes
   */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap((heroes: Hero[]) => {
          this.log(`Hero service: fetched heroes. Total of heroes: ${heroes.length}`);
        }),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /**
   * GET: get a hero by id.
   * - http code 404 if id not found.
   * @param heroId hero`s id
   */
  getHero(heroId: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Hero>(`${this.heroesUrl}/${heroId}`)
      .pipe(
        tap(() => this.log(`Hero service: fetched the hero with id: ${heroId}`)),
        catchError(this.handleError<Hero>(`getHero id=${heroId}`))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap((h: Hero) => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  /** GET: heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term || !term.trim() || term.trim().length < 3) {
      // if not search term, return empty hero array
      return of([]);
    }
    const normalizeTerm = term.trim();
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${normalizeTerm}`)
      .pipe(
        tap((heroes: Hero[]) =>
          this.log(`Hero service: found heroes matching ${normalizeTerm}. count ${heroes.length}`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }

  /** POST: create a new hero on the server */
  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`Hero service: created a hero. w/ Id=${newHero}`)),
        catchError(this.handleError<Hero>('createHero'))
      );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(() => this.log(`Hero service: updated hero with id ${hero.id}`)),
        catchError(this.handleError<Hero>(`updateHero id=${hero.id}`))
      );
  }

  /** DELETE: delete a hero by id on the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    return this.http.delete<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap(() => this.log(`Hero service: delete a hero. id=${id}`)),
        catchError(this.handleError<Hero>(`deleteHero id=${id}`))
      );
  }
}
