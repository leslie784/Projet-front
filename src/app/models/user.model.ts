import { defaultsDeep } from 'lodash';

export class User {
  id: number;
  username: string;
  password: string;
  mail: string;

  constructor(user?: Partial<User>) {
    defaultsDeep(this, user);
  }
}
