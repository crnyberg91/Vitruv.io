import React from 'react';

function ProblemsPage(props) {
    if (props.currentPage !== 2) {
        return null;
    }
    return (
        <div className="form-group">
            <label htmlFor="otherProblems">Current Symptoms</label>
            <input
                className="form-control"
                id="otherProblems"
                name="otherProblems"
                type="text"
                placeholder="symptoms"
                value={props.problems}
                onChange={props.handleChange}
            />
        </div>
    );
};

export default ProblemsPage;