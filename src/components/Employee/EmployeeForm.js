import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeForm = (onSave, onCancel) => {
    const [employee, setEmployee] = useState({
        code: "",
        name: "",
        email: "",
        gender: "",
        birthday: "",
        address: "",
        basicSalary: "",
        phone: "",
        department: "",
        position: "",
        doe: "",
        dor: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(employee);
    };
    return (
        <div className="register-container">
            <div className="register-box">
                <form onSubmit={handleSubmit}>
                    <h3 className="mb-1">Employee</h3>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Emp Code:</label>
                        <input className="col-7 form-control-sm"
                            type="text"
                            placeholder="Emp Number"
                            value={employee.code}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Name:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="text"
                            placeholder="Name"
                            value={employee.name}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Email:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="email"
                            placeholder="Email"
                            value={employee.email}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Gender:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="email"
                            placeholder="Email"
                            value={employee.email}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Birthday:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="number"
                            placeholder="Email"
                            value={employee.birthday}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Address:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="text"
                            placeholder="Address"
                            value={employee.address}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Basic Salary:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="number"
                            placeholder="Salary"
                            value={employee.basicSalary}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Phone:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="number"
                            placeholder="Phone"
                            value={employee.phone}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Department:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="number"
                            placeholder="Phone"
                            value={employee.department}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Position:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="number"
                            placeholder="Phone"
                            value={employee.position}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Enter Date:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="number"
                            placeholder="Phone"
                            value={employee.doe}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group row mb-0">
                        <label className="col-4 offset-1">Return Date:</label>
                        <input
                            className="col-7 form-control-sm"
                            type="number"
                            placeholder="Phone"
                            value={employee.dor}
                            onChange={(e) => setEmployee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex">
                    <button type="submit"  className="register-btn-one btn btn-sm btn-outline-primary">
                        Save
                    </button>
                    <Link to="/employees"  className="register-btn-two btn btn-sm btn-outline-primary me-3">
                        Cancel
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EmployeeForm;