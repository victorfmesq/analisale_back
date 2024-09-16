import { v4 as uuidv4 } from 'uuid';
import { Money } from '../value-objects/Money';

export class Item {
  public readonly id: string;

  constructor(
    public name: string,
    public description: string,
    public price: Money,
    public userId: string,
  ) {
    this.id = uuidv4();
  }
}
