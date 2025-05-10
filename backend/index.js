import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config.js';
import userRouter from './routers/userRouter.js';
import supportRouter from './routers/supportRouter.js';
import settingsRouter from './routers/settingsRouter.js';
import reviewloansRouter from './routers/reviewloanRouter.js';
import repaymentRouter from './routers/repaymentRouter.js';
import notificationRouter from './routers/notificationsRouter.js';
import loanRouter from './routers/loanRouter.js';
import loanReportRouter from './routers/loanReportRouter.js';
import lenderProfileRouter from './routers/lenderProfileRouter.js';
import investmentRouter from './routers/investmentRouter.js';
import borrowerRepaymentRouter from './routers/borrowerLoanRouter.js';
import borrowerNotificationRouter from './routers/borrowerNotificationRouter.js';
import borrowerLoanRouter from './routers/borrowerLoanRouter.js';
import paymentRouter from './routers/paymentRouter.js';
dotenv.config();

const app= express();
const PORT= config.port;
const {sequelize}= config;

app.use(express.json());
app.use(cors());
//routers
app.use('/api/users', userRouter);
app.use('/api/support', supportRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/review-loan', reviewloansRouter);
app.use('/api/repayments', repaymentRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/loans',  loanRouter);
app.use('/api/loan-report', loanReportRouter); 
app.use('/api/lender-profile', lenderProfileRouter);
app.use('/api/investment', investmentRouter);
app.use('/api/borrower-repayment', borrowerRepaymentRouter);
app.use('/api/borrower-notifications', borrowerNotificationRouter);
app.use('/api/borrower-loans', borrowerLoanRouter);
app.use('/api', paymentRouter);
//Synch database and start server
sequelize 
  .sync()
  .then(()=>{
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error)=>{
    console.error('Unable to connect to database',error.message);
  });
// error handling middleware
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({error: 'Something went wrong'});
});