export class Hero {

  id: number;

  name: string;

  /**
   * Constructor
   * @param name hero`s name
   * @param id optional number id (for new instance is not require)
   */
  private constructor(name: string, id?: number) {
    this.name = name;
    this.id = id;
  }

  /**
   * Create a new hero
   */
  static createNewHero(name: string, id?: number): Hero {
    return { name, id } as Hero;
  }
}
