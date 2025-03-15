import React from 'react';

const Home = () => {
  const userName = "John Doe";
  const userSats = {
    totalEmp: 120,
    todayLev: 5,
    pendingLev: 7
  }
  return (
  <div className='body_div_height'>
    <h3>Welcome, {userName}!</h3>
    <div className="p-3 border rounded text-center">
    <p>Total Employees : {userSats.totalEmp}</p>
    <p>Employees on Leave Today : {userSats.todayLev}</p>
    <p>Pending Leave Approvals : {userSats.pendingLev}</p>
    </div>
    
  </div>
);
}
export default Home;
