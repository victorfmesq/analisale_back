import { Request, Response } from 'express';
import { ItemService } from '../../application/services/ItemService';

export class ItemController {
  constructor(private itemService: ItemService) {}

  async createItem(req: Request, res: Response): Promise<void> {
    const { name, description, amount, currency } = req.body;
    const userId = req.user.id; // Supondo que a autenticação define `req.user`
    try {
      const item = await this.itemService.createItem(
        name,
        description,
        amount,
        currency,
        userId,
      );
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    }
  }

  async getItems(req: Request, res: Response): Promise<void> {
    const userId = req.user.id; // Supondo que a autenticação define `req.user`
    try {
      const items = await this.itemService.getItemsByUserId(userId);
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    }
  }

  // Métodos adicionais para atualizar e excluir itens
}
