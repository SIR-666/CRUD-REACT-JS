import express from 'express';
import { 
    getUser ,
    getUserByID,
    createNewUser,
    updateUser,
    deleteId  // Add deleteUser route here  // 9. Import and add deleteUser route here
} from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', getUser);
router.get('/users/:id', getUserByID);
router.post('/users', createNewUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteId);

export default router;