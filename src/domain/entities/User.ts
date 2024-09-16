import { v4 as uuidv4 } from 'uuid';

export class User {
  public readonly id: string;

  constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {
    this.id = uuidv4();
  }
}
