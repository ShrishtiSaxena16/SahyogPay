// import Loan from '../models/loanModel.js';

// export const getAllLoans = async (req, res) => {
//   try {
//     const loans = await Loan.findAll();  // You might want to add more filters or include related models if needed
//     res.json(loans);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const approveLoan = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const loan = await Loan.findByPk(id);
//     if (!loan) {
//       return res.status(404).json({ message: 'Loan not found' });
//     }
//     loan.status = 'approved';
//     await loan.save();
//     res.json({ message: 'Loan approved successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const rejectLoan = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const loan = await Loan.findByPk(id);
//     if (!loan) {
//       return res.status(404).json({ message: 'Loan not found' });
//     }
//     loan.status = 'rejected';
//     await loan.save();
//     res.json({ message: 'Loan rejected successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Create a loan request (newly added)
// export const createLoanRequest = async (req, res) => {
//   const { amount, term, purpose, interestRate, repaymentSchedule, borrowerName } = req.body;
//   const borrowerId = req.user.id;

//   try {
//     const newLoan = await Loan.create({
//       borrowerId,
//       borrowerName,
//       amount,
//       term,
//       purpose,
//       interestRate,
//       repaymentSchedule,
//       riskLevel: calculateRiskLevel(amount, term), // Assuming you have a function to calculate risk level
//       status: 'pending',
//     });

//     res.status(201).json(newLoan);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Utility function to calculate risk level (example)
// const calculateRiskLevel = (amount, term) => {
//   // Simple risk level logic (You can customize this based on your needs)
//   if (amount > 50000 && term > 12) {
//     return 'High';
//   } else if (amount > 10000 && term <= 12) {
//     return 'Medium';
//   } else {
//     return 'Low';
//   }
// };
import Loan from '../models/loanModel.js';
import User from '../models/userModel.js';

// Get all loans with borrower name included
export const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({
      include: [
        {
          model: User,
          as: 'borrower',
          attributes: ['id','name'], // Fetch only necessary borrower info (name)
        }
      ]
    });
    console.log(loans);
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Approve a loan request
export const approveLoan = async (req, res) => {
  const { id } = req.params;
  try {
    const loan = await Loan.findByPk(id);
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    loan.status = 'approved';
    await loan.save();
    res.json({ message: 'Loan approved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Reject a loan request
export const rejectLoan = async (req, res) => {
  const { id } = req.params;
  try {
    const loan = await Loan.findByPk(id);
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    loan.status = 'rejected';
    await loan.save();
    res.json({ message: 'Loan rejected successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a loan request
export const createLoanRequest = async (req, res) => {
  const {amount, term, purpose, interestRate, repaymentSchedule } = req.body;
  const borrowerId = req.user.id;

  try {
    // Fetch the borrower's name from the User table
    const borrower = await User.findByPk(borrowerId);
    if (!borrower) {
      return res.status(404).json({ message: 'Borrower not found' });
    }
   // const borrowerName = borrower.name;
    // Create a new loan request with fetched borrower name
    const newLoan = await Loan.create({
      borrowerId,
    //  borrowerName,  // Set the borrowerName from User table
      amount,
      term,
      purpose,
      interestRate,
      repaymentSchedule,
      riskLevel: calculateRiskLevel(amount, term),
      status: 'pending',
    });

    res.status(201).json(newLoan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Utility function to calculate risk level (example)
const calculateRiskLevel = (amount, term) => {
  if (amount > 50000 && term > 12) {
    return 'High';
  } else if (amount > 10000 && term <= 12) {
    return 'Medium';
  } else {
    return 'Low';
  }
};
