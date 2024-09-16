import { Item } from '../entities/Item';

export interface ItemRepository {
  save(item: Item): Promise<void>;
  findById(id: string): Promise<Item | null>;
  findByUserId(userId: string): Promise<Item[]>;
  deleteById(id: string): Promise<void>;
}
