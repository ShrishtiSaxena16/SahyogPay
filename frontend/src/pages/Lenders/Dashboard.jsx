// import React from 'react';
// import Sidebar from '../Lenders/LenderSidebar';

// const LenderDashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar userRole="lender" />
//       <div className="flex-1 p-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">Lender Dashboard</h1>
        
//         {/* Dashboard Overview Section */}
//         <div className="bg-white p-8 shadow-lg rounded-lg mb-8">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
//           <p className="text-gray-600">
//             Welcome to your Lender Dashboard. Here, you can manage your investments, view notifications, 
//             and access your profile. Stay updated with your lending activities and monitor your portfolio performance.
//           </p>
//         </div>

//         {/* Additional Content (Example: Stats, Notifications, Profile) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Stats Card */}
//           <div className="bg-white p-6 shadow-md rounded-lg">
//             <h3 className="text-xl font-semibold text-gray-700">Total Investments</h3>
//             <p className="text-2xl font-bold text-gray-800 mt-2">$10,000</p>
//           </div>
          
//           {/* Notifications Card */}
//           <div className="bg-white p-6 shadow-md rounded-lg">
//             <h3 className="text-xl font-semibold text-gray-700">New Notifications</h3>
//             <p className="text-2xl font-bold text-gray-800 mt-2">3</p>
//           </div>
          
//           {/* Profile Card */}
//           <div className="bg-white p-6 shadow-md rounded-lg">
//             <h3 className="text-xl font-semibold text-gray-700">Your Profile</h3>
//             <p className="text-gray-600 mt-2">View and edit your profile details, manage your account settings.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LenderDashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar';

const LenderDashboard = () => {
  const [loanRequests, setLoanRequests] = useState([]);

  useEffect(() => {
    const fetchLoanRequests = async () => {
      
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/borrower-loans', {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        setLoanRequests(response.data);
      } catch (error) {
        console.error('Error fetching loan requests:', error);
      }
    };

    fetchLoanRequests();
  }, []);



  // const handleDecision = async (loanId, decision) => {
  //   const token = localStorage.getItem('token');
  //   try {
  //     // Send the decision to the backend for updating the loan and creating the notification
  //     await axios.put(
  //       `http://localhost:5000/api/borrower-notifications/${loanId}/update`, 
  //       { decision },
  //       {
  //         headers: { Authorization: `Bearer ${token}` }
  //       }
  //     );
  //     alert(`Loan ${decision}ed successfully`);
  //   } catch (error) {
  //     console.error('Error sending notification or updating loan status:', error);
  //   }
  // };
  
  const handleDecision = async (loanId, decision) => {
    console.log(`Decision clicked: ${decision} for loanId: ${loanId}`); // Add this
    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `http://localhost:5000/api/borrower-notifications/${loanId}/status`,
        { decision },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert(`Loan ${decision}ed successfully`);
    } catch (error) {
      console.error('Error sending notification or updating loan status:', error.response?.data || error.message);
      alert(`Failed to ${decision} the loan`);
    }
  };
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar userRole="lender" />
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Lender Dashboard</h1>

        {/* Overview Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
          <p className="text-gray-600">
            Welcome to your Lender Dashboard. Here, you can manage your investments, view notifications, 
            and access your profile. Stay updated with your lending activities and monitor your portfolio performance.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Total Investments</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">$10,000</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">New Loan Requests</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">{loanRequests.length}</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Your Profile</h3>
            <p className="text-gray-600 mt-2">View and edit your profile details, manage your account settings.</p>
          </div>
        </div>

        {/* Loan Requests Table */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Loan Requests</h2>
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2 border">Borrower ID</th>
                {/* <th className="px-4 py-2 border">Name</th> */}
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Purpose</th>
                <th className="px-4 py-2 border">Term</th>
                <th className="px-4 py-2 border">Interest Rate</th>
                <th className="px-4 py-2 border">Repayment Schedule</th>
                <th className="px-4 py-2 border">Decision</th>
              </tr>
            </thead>
            <tbody>
              {loanRequests.map((loan) => (
                <tr key={loan.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{loan.borrowerId}</td>
                  {/* <td className="px-4 py-2 border">{loan.borrower?.name}</td> */}
                  <td className="px-4 py-2 border">${loan.amount}</td>
                  <td className="px-4 py-2 border">{loan.purpose}</td>
                  <td className="px-4 py-2 border">{loan.term} months</td> 
                  <td className="px-4 py-2 border">{loan.interestRate}%</td>
                  <td className="px-4 py-2 border">{loan.repaymentSchedule}</td> 
                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleDecision(loan.id, 'accept')}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDecision(loan.id, 'reject')}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
              {loanRequests.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No loan requests available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LenderDashboard;
