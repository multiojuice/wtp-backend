import {Router} from 'express';

import events from './events';
import publicSchools from './public-schools';
import students from './students';
import universities from './universities';

const router = Router();

router.use('/public-schools', publicSchools);
router.use('/universities', universities);
router.use('/students', students);
router.use('/events', events)

export default router;