import React from 'react';

function PsyInfo(props) {
    if (props.currentPage !== 3) {
        return null
    }
    return (
        <div className="form-group">
            {/* checkbox, if yes, answer question */}
            <label htmlFor="lastPsyProvider">Name of last psychiatric provider?</label>
            <input
                className="form-control"
                id="lastPsyProvider"
                name="lastPsyProvider"
                type="text"
                placeholder=""
                value={props.lastPsyProvider}
                onChange={props.handleChange}
            />
            {/* checkbox, if yes, answer question */}
            <label htmlFor="lastPsyVisit">Last visit to psychiatric provider?</label>
            <input
                className="form-control"
                id="lastPsyVisit"
                name="lastPsyVisit"
                type="text"
                placeholder=""
                value={props.lastPsyVisit}
                onChange={props.handleChange}
            />
            <label htmlFor="psyMeds">Current Medication:</label>
            <input
                className="form-control"
                id="psyMeds"
                name="psyMeds"
                type="psyMeds"
                placeholder=""
                value={props.psyMeds}
                onChange={props.handleChange}
            />
            <label htmlFor="psySuicide">Have you ever attempted suicide?</label>
            <input
                className="form-control"
                id="psySuicide"
                name="psySuicide"
                type="psySuicide"
                placeholder=""
                value={props.psySuicide}
                onChange={props.handleChange}
            />
        </div>
    );
}

export default PsyInfo;