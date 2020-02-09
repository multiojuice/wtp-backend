import {Router} from 'express';

import students from './students';
import universities from './universities';

const router = Router();

router.use('/universities', universities);
router.use('/students', students);

export default router;