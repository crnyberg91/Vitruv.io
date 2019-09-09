import React from "react";

function GeneralInfo(props) {
    if (props.currentPage !== 1) {
        return null
    }
    return (
        <div className="form-group">
            <h3>General Information</h3>
            <label htmlFor="email">Email Address</label>
            <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
                value={props.email}
                onChange={props.handleChange}
            />
            <label htmlFor="patientName">name</label>
            <input
                className="form-control"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={props.name}
                onChange={props.handleChange}
            />
            <label htmlFor="dob">Date of Birth</label>
            <input
                className="form-control"
                id="dob"
                name="dob"
                type="text"
                placeholder="(mm/dd/yyyy)"
                value={props.dob}
                onChange={props.handleChange}
            />
            <label htmlFor="age">Enter your Age</label>
            <input
                className="form-control"
                id="age"
                name="age"
                type="number"
                placeholder="age"
                value={props.age}
                onChange={props.handleChange}
            />
        </div>
    );
}

export default GeneralInfo;