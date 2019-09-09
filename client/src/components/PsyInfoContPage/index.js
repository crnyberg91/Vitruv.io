import React from "react";

function PsyInfoContinued(props) {
    if (props.currentPage !== 4) {
        return null
    }
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="erCount">How many visits have you had to the emergency room?</label>
                <input
                    className="form-control"
                    id="erCount"
                    name="erCount"
                    type="erCount"
                    placeholder=""
                    value={props.erCount}
                    onChange={props.handleChange}
                />
                <label htmlFor="erLastTime">When was the last time in the ER?</label>
                <input
                    className="form-control"
                    id="erLastTime"
                    name="erLastTime"
                    type="erLastTime"
                    placeholder=""
                    value={props.erLastTime}
                    onChange={props.handleChange}
                />
            </div>
            <button className="btn btn-success btn-block">Submit</button>
        </React.Fragment>

    );
}

export default PsyInfoContinued;