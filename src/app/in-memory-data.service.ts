// src/app/in-memory-data.service.ts
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, email: 'user1@example.com', phone: '1234567890', password: 'password1' },
      { id: 2, email: 'user2@example.com', phone: '0987654321', password: 'password2' }
    ];

    const organizations = [
      { id: 1, name: 'Organization One' },
      { id: 2, name: 'Organization Two' }
    ];

    return { users, organizations };
  }
}
