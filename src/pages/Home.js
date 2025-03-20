import React from 'react';
import employeeImage from '../assets/images/Employee.jpg';
import AttendanceImage from '../assets/images/Attendance.jpg';
import PayrollImage from '../assets/images/Payroll.jpg';
import DepartmentImage from '../assets/images/Department.jpg';
import "../styles/home.css";

const Home = () => {
  const userName = "John Doe";
  const userSats = {
    totalEmp: 120,
    todayLev: 5,
    pendingLev: 7
  }
  const announcements = [
    'Holiday announcement: Office closed on Friday.',
    'Reminder: Submit your timesheets by the end of the week.',
    'Team meeting tomorrow at 10 AM.',
  ];
  const birthdays = [
    { name: 'John Doe', date: '2025-03-20' },
    { name: 'Jane Smith', date: '2025-03-22' },
    { name: 'Mark Johnson', date: '2025-03-25' },
    { name: 'Emma Brown', date: '2025-03-30' },
  ];
  return (
    <div className='body_div_height'>
      {/* user */}
      <div className='text-center text-light'>
        <h3>Welcome, {userName}!</h3>
      </div>
      
      {/* employee info */}
      <div className='row'>
        <div className='col-2 offset-1'>
          <div className="p-2 border rounded text-center bg-light bg-opacity-75 text-warning-emphasis">Total Employees : {userSats.totalEmp}</div>
        </div>
        <div className='col-3 offset-1'>
          <div className="p-2 border rounded text-center bg-light bg-opacity-75 text-warning-emphasis">Employees on Leave Today : {userSats.todayLev}</div>
        </div>
        <div className='col-3 offset-1'>
          <div className="p-2 border rounded text-center bg-light bg-opacity-75 text-warning-emphasis">Pending Leave Approvals : {userSats.pendingLev}</div>
        </div>
      </div>

      {/* quick action part */}
      <div className='container-fluid'>
      <div className='row'>
          <div className="col-2 ms-5 card">
          <a href="https://example.com" className="card-link text-decoration-none">
          <div className="card-body">
            <h5 className="card-title">Employee</h5>
            <img
            src={employeeImage}
            className="card-img-top rounded mb-1" height={105}
            alt="Card image"
          />
            <button className='btn form-control btn-primary'>Add</button>
          </div>
          </a>
        </div>
        <div className="col-2 offset-1 card">
        <a href="https://example.com" className="card-link text-decoration-none">
          <div className="card-body">
            <h5 className="card-title">Attendance</h5>
            <img
            src={AttendanceImage}
            className="card-img-top rounded mb-1" height={105}
            alt="Card image"
          />
            <button className='btn btn-primary form-control'>View</button>
          </div>
          </a>
        </div>
        <div className="col-2 offset-1 card">
        <a href="https://example.com" className="card-link text-decoration-none">
          <div className="card-body">
            <h5 className="card-title">Payroll</h5>
            <img
            src={PayrollImage}
            className="card-img-top rounded mb-1" height={105}
            alt="Card image"
          />
            <button className='btn btn-primary form-control'>Generate</button>
          </div>
          </a>
        </div>
        <div className="card col-2 offset-1">
        <a href="https://example.com" className="card-link text-decoration-none">

          <div className="card-body">
            <h5 className="card-title">Departments</h5>
            <img
              src={DepartmentImage}
              className="card-img-top border border-info rounded mb-1" height={105}
              alt="Card image"
            />
            <button className='btn btn-primary form-control'>Manage</button>
            </div>
            </a>
        </div>
      
      </div>
      </div>

      {/* announce and birthdays */}
      <div className='row container-fluid'>
        <div className='col-5 offset-1 bg-light bg-opacity-75 border rounded p-2'>
          <h4 className='text-warning-emphasis ms-3'>Announcements</h4>
            {announcements.map((announce,index)=>(
              <label className='form-control bg-light-subtle border-2 text-primary' key={index}>{announce}</label>
            ))}
        </div>
        <div className='col-5 offset-1 bg-light bg-opacity-75 border rounded pt-2'>
          <h4 className='text-warning-emphasis ms-3'>Birthdays</h4>
          <div className='birthday_table_wrapper'>
            <table className='table table-striped'>
              <thead className='bg-dark-subtle border-2'>
                <tr>
                <th className='text-center border-2'>Emp No</th>
                <th className='ps-5 border-2'>Name</th>
                <th className='text-center border-2'>Date</th>
                </tr>
              </thead>
              <tbody>
                {birthdays.map((birthday, index)=>(
                  <tr key={index} className='bg-light-subtle text-primary'>
                    <td className='text-center'>DEV-0001</td>
                    <td className='ps-4'>{birthday.name}</td>
                    <td className='text-center'>{birthday.date}</td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
