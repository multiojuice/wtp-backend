import POST from './post';
import GET from './get';
import {Router} from 'express';

const router = Router();
router.get('/', GET);
router.post('/', POST);

export default router;