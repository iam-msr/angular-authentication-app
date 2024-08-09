import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, email: 'user1@example.com', phone: '1234567890', password: 'password1', name: 'User One' },
      { id: 2, email: 'user2@example.com', phone: '0987654321', password: 'password2', name: 'User Two' },
      { id: 7, email: 'user7@example.com', phone: '777777777', password: 'password7', name: 'User Seven' }
    ];
    const organizations = [
      { id: 1, name: 'Org One' },
      { id: 2, name: 'Org Two' },
      { id: 7, name: 'Org Seven' }
    ];
    return { users, organizations };
  }
}
