import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Employees = () => {
    const [employees, seteEmployee] = useState([
        { code: 1, name: "John Doe", phone: "1234567890", address: "123 Main St", email: "john@example.com" },
        { code: 2, name: "Jane Smith", phone: "9876543210", address: "456 Elm St", email: "jane@example.com" },
    ]);

    return (
        <div className="container body_div_height mt-4">
            <div className="bg-light bg-opacity-75 mt-3">
                    {/* top btn */}
                    <div className="row align-items-center pt-2">
                        <div className="col-auto offset-1">
                        <Link to="/newemployee" className="btn btn-outline-primary btn-sm">
                            New Employee
                        </Link>
                        </div>
                        <div className="col-3 offset-5 me-2">
                            <input
                                className="form-control form-control-sm "
                                type="search"
                                placeholder="Enter"
                            />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-primary btn-sm btn-width me-3" type="button">
                                Search
                            </button>
                        </div>
                    </div>
                    {/* body table */}
                    <div className="table_wrapper">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Birthday</th>
                                    <th>Address</th>
                                    <th>Basic Salary</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                    <th>Position</th>
                                    <th>DOE</th>
                                    <th>DOR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee, index) => (
                                    <tr key={index}>
                                        <td></td>
                                        <td>{employee.code}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.code}</td>
                                        <td>{employee.code}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.code}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.code}</td>
                                        <td>{employee.code}</td>
                                        <td>{employee.code}</td>
                                        <td>{employee.code}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* update & delete */}
                    <div className="row pb-3">
                        <button className="col-auto offset-9 btn btn-outline-primary btn-sm me-5 btn-width">Update</button>
                        <button className="col-auto btn btn-outline-danger btn-sm ms-4 btn-width">
                            Delete
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default Employees;