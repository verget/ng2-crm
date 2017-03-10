import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        title: 'Изучить JavaScript',
        completed: true,
        state: 1,
        parent: 0
      },
      {
        id: 2,
        title: 'Изучить Angular 2',
        completed: false,
        state: 1,
        parent: 0
      },
      {
        id: 3,
        title: 'Написать приложение',
        completed: false,
        state: 1,
        parent: 0
      }
    ];
    return {todos};
  }
}
