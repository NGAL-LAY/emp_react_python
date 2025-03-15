import React from 'react';
import employeeImage from '../assets/images/Employee.jpg';
import AttendanceImage from '../assets/images/Attendance.jpg';
import PayrollImage from '../assets/images/Payroll.jpg';
import DepartmentImage from '../assets/images/Department.jpg';

const Home = () => {
  const userName = "John Doe";
  const userSats = {
    totalEmp: 120,
    todayLev: 5,
    pendingLev: 7
  }
  return (
    <div className='body_div_height'>
      <div className='text-center text-light'>
        <h3>Welcome, {userName}!</h3>
      </div>
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
      

    </div>
  );
}
export default Home;
