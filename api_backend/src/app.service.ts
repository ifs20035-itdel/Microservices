import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './user/create-user-request.dto';
import { CreateUserEvent } from './user/create-user.event';

@Injectable()
export class AppService {

  private readonly users: any[] = []

  constructor(
    @Inject('COMMUNICATION') private readonly comunicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);    
    this.comunicationClient.emit('user_created', new CreateUserEvent(createUserRequest.email));
    this.analyticClient.emit('user_created', new CreateUserEvent(createUserRequest.email));
  }
}
