import { Router } from 'express';
import TokenController from '../controllers/token-controller/token-controller';
import TokenRepository from '../repositories/token-repository/token-repository';

const tokenRepository = new TokenRepository();
const tokenController = new TokenController(tokenRepository);

const router = Router();

router.get('/:user_id', tokenController.getToken);

export default router;
