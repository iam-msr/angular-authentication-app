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
      { id: 7, email: 'user7@example.com', phone: '7777777777', password: 'password7', name: 'User Seven' },
      { id:123, email: 'test@mail.com', phone: '9848526270', password: 'test123', name: 'Test User' },
      { id:1234, email: 'user@mail.com', phone: '7898123456', password: 'user123', name: 'User' },
    ];
    const organizations = [
      { id: 1, name: 'Org One' },
      { id: 2, name: 'Org Two' },
      { id: 7, name: 'Org Seven' },
      { id: 123, name: 'Testing' },
      { id: 1234, name: 'testing' },
      { id: 12345, name: 'Test Org' }
    ];
    return { users, organizations };
  }
}
