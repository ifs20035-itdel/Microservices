import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './user/create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - COMMUNICATIONS', data);

    // TODO: After the user created, email the user with the provided email
  }
}
