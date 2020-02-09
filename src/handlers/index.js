import {Router} from 'express';

import universities from './universities';

const router = Router();

router.use('/universities', universities);

export default router;