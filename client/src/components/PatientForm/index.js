import React from "react";
import pdf from '../utils/pdf';
import axios from "axios";
import GeneralInfo from "../GeneralInfoPage";
import ProblemsPage from "../ProblemsPage";
import PsyInfo from "../PsyInfoPage";
import PsyInfoContinued from "../PsyInfoContPage";
import FilledForm from "../FilledForm";
import Pdf from "react-to-pdf";
import Button from "react-bootstrap/Button";

const ref = React.createRef();
let completeForm;



class PatientForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            email: '',
            name: '',
            dob: '',
            age: '',
            otherProblems: '',
            lastPsyProvider: '',
            lastPsyVisit: '',
            psyMeds: '',
            psySuicide: '',
            erCount: '',
            erLastTime: '',
            formProps: null

        }
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        let user = {
            email: this.state.email,
            name: this.state.name,
            dob: this.state.dob,
            age: this.state.age,
            otherProblems: this.state.otherProblems,
            lastPsyProvider: this.state.lastPsyProvider,
            lastPsyVisit: this.state.lastPsyVisit,
            psyMeds: this.state.psyMeds,
            psySuicide: this.state.psySuicide,
            erCount: this.state.erCount,
            erLastTime: this.state.erLastTime
        }

        this.setState(
            this.state.formProps = user
        )

        axios.post("/api/addform", user)
            .then(
                console.log("fired")
            )

        completeForm = pdf.regularForm(user)
        console.log("Complete Form: ", completeForm)
    }

    _next = () => {
        let currentPage = this.state.currentPage
        currentPage = currentPage >= 3 ? 4 : currentPage + 1
        this.setState({
            currentPage: currentPage
        })
    }

    _prev = () => {
        let currentPage = this.state.currentPage
        currentPage = currentPage <= 1 ? 1 : currentPage - 1
        this.setState({
            currentPage: currentPage
        })
    }

    // the functions for our button
    previousButton() {
        let currentPage = this.state.currentPage;
        if (currentPage !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
          </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentPage = this.state.currentPage;
        if (currentPage < 4) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
          </button>
            )
        }
        return null;
    }

    render() {
        let formProps = this.state.formProps
        return (
            <>
                <React.Fragment>
                    <h1><strong>Vitruvio Mock Patient Form</strong></h1>
                    <p>Page {this.state.currentPage} </p>

                    <form onSubmit={this.handleSubmit}>

                        <GeneralInfo
                            currentPage={this.state.currentPage}
                            handleChange={this.handleChange}
                            email={this.state.email}
                            name={this.state.name}
                            dob={this.state.dob}
                            age={this.state.age}
                        />

                        <ProblemsPage
                            currentPage={this.state.currentPage}
                            handleChange={this.handleChange}
                            otherProblems={this.state.otherProblems}
                        />

                        <PsyInfo
                            currentPage={this.state.currentPage}
                            handleChange={this.handleChange}
                            lastPsyProvider={this.state.lastPsyProvider}
                            lastPsyVisit={this.state.lastPsyVisit}
                            psyMeds={this.state.psyMeds}
                            psySuicide={this.state.psySuicide}
                        />

                        <PsyInfoContinued
                            currentPage={this.state.currentPage}
                            handleChange={this.handleChange}
                            erCount={this.state.erCount}
                            erLastTime={this.state.erLastTime}
                        />

                        {this.previousButton()}
                        {this.nextButton()}

                    </form>

                </React.Fragment>
                {completeForm}
            </>
        );
    }
}

export default PatientForm;

            // //family psychiatric History
            // grandparent: [],
            // mother: [],
            // father: [],
            // sibling: [],
            // child: [],
            // other: [],
            // //medical and surgical history
            // healthConditions: [],
            // surgeries: [],
            // medications: '',
            // allergyMeds: '',
            // //social and developmental
            // grewUp: '',
            // raisedYou: '',
            // education: [],
            // abuse: 'no',
            // maritalStatus: '',
            // liveWith: '',