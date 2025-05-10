// import express from 'express';
// import { getNotifications } from '../controllers/notificationsController.js';
// import { createNotification } from '../controllers/notificationsController.js';
// import authMiddleware from '../middleware/authMiddleware.js'; 

// const router = express.Router();

// router.get('/',authMiddleware, getNotifications);
// router.post('/', authMiddleware, createNotification);
// export default router;

import express from 'express';
import {
  getNotifications,
  createNotification,
  updateLoanStatusAndNotify
} from '../controllers/notificationsController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getNotifications);
router.post('/', authMiddleware, createNotification);

// ✅ Add this route for loan decision + notification
router.post('/:loanId/status', authMiddleware, updateLoanStatusAndNotify);

export default router;
