import Notification from '../models/notificationModel.js';
  // Assuming you're using raw SQL for loan status update

// Get notifications for the lender
export const getNotifications = async (req, res) => {
  try {
    const lenderId = req.user.id;

    const notifications = await Notification.findAll({
      where: { lenderId },
      order: [['createdAt', 'DESC']],
    });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications.' });
  }
};

// Create a new notification (used in the old POST route)
export const createNotification = async (req, res) => {
  const { loanId, decision } = req.body;
  const userId = req.user.id; // Assuming the authenticated user's ID is attached to the request
  
  try {
    const notification = await Notification.create({
      borrowerId: loanId, // Update this field based on your actual data model
      title: `Loan ${decision}`,
      message: `Your loan request with ID ${loanId} has been ${decision}`,
    });
    
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// New function to update loan status and create notification
export const updateLoanStatusAndNotify = async (req, res) => {
  const { loanId } = req.params;
  const { decision } = req.body;

  try {
    // Get userId linked to this loan (assuming you have a "Loans" table in your DB)
    const loanResult = await pool.query('SELECT "userId" FROM "Loans" WHERE id = $1', [loanId]);
    if (loanResult.rows.length === 0) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    const userId = loanResult.rows[0].userId;  // User ID of the borrower

    // Create a notification
    const message = `Your loan request with ID ${loanId} has been ${decision}ed.`;
    await Notification.create({
      borrowerId: userId,  // Borrower's ID from the loan table
      title: `Loan ${decision}`,
      message: message,
    });

    // Optionally update the loan status in the "Loans" table
    await pool.query(
      `UPDATE "Loans" SET status = $1, "updatedAt" = CURRENT_TIMESTAMP WHERE id = $2`,
      [decision, loanId]
    );

    res.status(200).json({ message: 'Loan status updated and notification created' });
  } catch (error) {
    console.error('Error updating loan and creating notification:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// import Notification from '../models/notificationModel.js';

// // Create a notification for the lender
// export const createNotification = async (req, res) => {
//   const { loanId, decision } = req.body;
//   const lenderId = req.user.id; // Assuming the authenticated lender's ID is attached to the request
  
//   try {
//     // Find the loan using the loanId to get borrower details or other loan-specific information
//     const loan = await loan.findByPk(loanId);
//     if (!loan) return res.status(404).json({ message: 'Loan not found' });

//     // Create a notification for the lender
//     const notification = await Notification.create({
//       lenderId: lenderId, // This should be the lender's ID who is receiving the notification
//       message: `You have ${decision}ed a loan request for ${loan.borrowerName}.`,
//       loanId: loan.id  // Link notification to the loan
//     });

//     res.status(201).json(notification);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
