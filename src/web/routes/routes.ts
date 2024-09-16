import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { ItemController } from '../controllers/ItemController';

const router = Router();
const userController = new UserController(/* instanciar UserService aqui */);
const itemController = new ItemController(/* instanciar ItemService aqui */);

// Rotas de usuário
router.post('/register', userController.register.bind(userController));

// Rotas de itens
router.post('/items', itemController.createItem.bind(itemController));
router.get('/items', itemController.getItems.bind(itemController));

// Outras rotas

export default router;
