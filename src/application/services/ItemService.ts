import { Item } from '../../domain/entities/Item';
import { Money } from '../../domain/value-objects/Money';
import { ItemRepository } from '../../domain/repositories/ItemRepository';

export class ItemService {
  constructor(private itemRepository: ItemRepository) {}

  async createItem(
    name: string,
    description: string,
    amount: number,
    currency: string,
    userId: string,
  ): Promise<Item> {
    const price = new Money(amount, currency);
    const item = new Item(name, description, price, userId);
    await this.itemRepository.save(item);
    return item;
  }

  async getItemsByUserId(userId: string): Promise<Item[]> {
    return this.itemRepository.findByUserId(userId);
  }

  async getItemById(id: string): Promise<Item | null> {
    return this.itemRepository.findById(id);
  }

  async deleteItem(id: string): Promise<void> {
    await this.itemRepository.deleteById(id);
  }
}
