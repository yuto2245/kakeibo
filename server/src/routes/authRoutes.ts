//Routerでエンドポイントと関数を紐付け
import { Router } from 'express';
import { testApi } from '../controllers/authController';

const router = Router();

// Routerにエンドポイントを登録
//router.post('auth', requestAuth);
//router.get('callback', handleCallback);
router.get('test', testApi);

export default router;