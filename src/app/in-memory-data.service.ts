import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Captain America' },
      { id: 2, name: 'Thanos' },
      { id: 3, name: 'Spider-Man' },
      { id: 4, name: 'Black Panther' },
      { id: 5, name: 'Deadpool'},
      { id: 6, name: 'Iron Man'},
      { id: 7, name: 'Hulk' },
      { id: 8, name: 'Thor' },
      { id: 9, name: 'Wolverine' },
      { id: 10, name: 'Jean Grey' },
      { id: 11, name: 'Daredevil' },
      { id: 12, name: 'Punisher' },
      { id: 13, name: 'Gambit' },
      { id: 14, name: 'Doctor Strange' },
      { id: 15, name: 'Mr. Fantastic'},
      { id: 16, name: 'Professor X'},
      { id: 17, name: 'Human Torch' },
      { id: 18, name: 'Silver Surfer' },
      { id: 19, name: 'Vision' },
      { id: 20, name: 'Cyclops' },
    ]
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
