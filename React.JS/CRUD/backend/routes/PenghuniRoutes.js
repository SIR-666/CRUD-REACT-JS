import express from 'express';
import { 
    getPenghuni,
    getPenghuniByID,
    createNewPenghuni
} from '../controllers/penghuniController.js';

const router = express.Router();

router.get('/penghuni', getPenghuni);
router.get('/penghuni/:id', getPenghuniByID);
router.post('/penghuni', createNewPenghuni);

export default router;