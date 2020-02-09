import POST from './post';
import GET from './get';
import DELETE from './delete';

import {Router} from 'express';

const router = Router();
router.get('/', GET);
router.post('/', POST);
router.delete('/', DELETE)

export default router;