import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeForm = ({ onSave }) => {
    const [employee, setEmployee] = useState({
        code: "",
        name: "",
        email: "",
        gender: "Male",
        birthday: "",
        address: "",
        basicSalary: "",
        phone: "",
        department: "",
        position: "",
        doe: "",
        dor: "",
    });

    const departments = ["HR", "Finance", "Engineering", "Marketing", "Sales"];
    const positions = ["HR", "Finance", "Engineering", "Marketing", "Sales"];

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(employee);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <div className="register-container">
            <div className="register-box">
                <form onSubmit={handleSubmit}>
                    <h3 className="mb-3 text-warning-emphasis">Employee</h3>
                    {/* code */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="code">Emp Code:</label>
                        <input className="col-6 form-control-sm"
                            id="code"
                            type="text"
                            name="code"
                            placeholder="Emp Number"
                            value={employee.code || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* name */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="name">Name:</label>
                        <input
                            id="name"
                            className="col-6 form-control-sm"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={employee.name || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* email */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="email">Email:</label>
                        <input
                            id="email"
                            name="email"
                            className="col-6 form-control-sm"
                            type="email"
                            placeholder="Email"
                            value={employee.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* gender */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="gender">Gender:</label>
                        <div className="col-6 d-flex align-items-center" id="gender">
                            <div className="form-check me-3">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={employee.gender === "Male"}
                                    onChange={handleChange}
                                    id="male"
                                />
                                <label className="form-check-label ms-1 text-warning-emphasis" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={employee.gender === "Female"}
                                    onChange={handleChange}
                                    id="female"
                                />
                                <label className="form-check-label ms-1 text-warning-emphasis" htmlFor="female">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* birthday */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="birthday">Birthday:</label>
                        <input
                            id="birthday"
                            name="birthday"
                            className="col-6 form-control-sm"
                            type="date"
                            value={employee.birthday || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* address */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="address">Address:</label>
                        <input
                            id="address"
                            name="address"
                            className="col-6 form-control-sm"
                            placeholder="Address"
                            value={employee.address || ""}
                            onChange={handleChange}
                            rows="5"
                        />
                    </div>
                    {/* basic salaary */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="basicsalary">Basic Salary:</label>
                        <input
                            id="basicsalary"
                            name="basicsalary"
                            className="col-6 form-control-sm"
                            type="number"
                            placeholder="basic salary"
                            value={employee.basicSalary || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* phone */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="phone">Phone:</label>
                        <input
                            id="phone"
                            name="phone"
                            className="col-6 form-control-sm"
                            type="number"
                            placeholder="Enter PhoneNo:(number only)"
                            value={employee.phone || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* department */}
                    <div className="input-group row mb-2">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="department">Department:</label>
                        <select id="department"
                            name="department"
                            className="col-6 form-control-sm"
                            value={employee.department || ""}
                            onChange={handleChange}
                            required>
                            <option value='' disabled>--Select Department--</option>
                            {departments.map((department, index) => (
                                <option key={index} value={department}>{department}</option>
                            ))
                            }
                        </select>
                    </div>
                    {/* position */}
                    <div className="input-group row mb-2">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="position">Position:</label>
                        <select
                            id="position"
                            name="position"
                            className="col-6 form-control-sm"
                            value={employee.position || ""}
                            onChange={handleChange}
                            required
                        >
                            <option value='' disabled>--Select Position--</option>
                            {positions.map((position, index) => (
                                <option key={index} value={position}>{position}</option>
                            ))}
                        </select>
                    </div>
                    {/* enterdate */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="enterdate">Company EntDate:</label>
                        <input
                            id="enterdate"
                            name="enterdate"
                            className="col-6 form-control-sm"
                            type="date"
                            value={employee.doe || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* company leave date */}
                    <div className="input-group row mb-1">
                        <label className="col-4 offset-1 text-warning-emphasis" htmlFor="leavedate">Company LeaDate:</label>
                        <input
                            id="leavedate"
                            name="leavedate"
                            className="col-6 form-control-sm"
                            type="date"
                            value={employee.dor || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* save & cancel */}
                    <div className="d-flex mb-2">
                        <button type="submit" className="register-btn-one btn btn-sm btn-outline-primary">
                            Save
                        </button>
                        <Link to="/employees" className="register-btn-two btn btn-sm btn-outline-light">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EmployeeForm;