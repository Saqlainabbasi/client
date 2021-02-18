import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookTaxi, clearState } from '../../Store/actions';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';


class FormBox extends Component {
    state = {
        currentStep: 1,
        text: '',
        formdata: {
            userId: '',
            userName: '',
            userEmail: '',
            phoneNo: '',
            cabId: '',
            cabName: '',
            route: '',
            date: '',
            payMethod: '',
            time: '',
            rate: '',
        }

    }
    handleClick = (e, name) => {
        e.preventDefault();
        if (name === 'to') {

            this.next(e, name)
        }
        if (name === 'from') {

            this.next(e, name)
        }
        if (name === '') {

            this.next(e, name)
        }
    }
    handleChange = (e, name) => {
        e.preventDefault();
        let newformData = this.state.formdata;
        newformData[name] = e.target.value
        this.setState({
            formdata: newformData
        })
    }

    handlePay = (e, name) => {
        e.preventDefault();

        let formdata = this.state.formdata;
        formdata['payMethod'] = name
        this.setState({
            formdata: formdata
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formdata;
        data['route'] = this.props.mapdata.cabRule.arr;
        data['rate'] = this.props.mapdata.cabFare;
        this.props.dispatch(bookTaxi(data))
    }


    next = (e, name = '') => {
        e.preventDefault();
        if (name === 'to') {

            let currentStep = this.state.currentStep
            // If the current step is 1 or 2, then add one on "next" button click
            currentStep = currentStep >= 2 ? 3 : currentStep + 1
            this.setState({
                ...this.state,
                text: name,
                currentStep: currentStep
            })
        }
        if (name === 'from') {

            let currentStep = this.state.currentStep
            // If the current step is 1 or 2, then add one on "next" button click
            currentStep = currentStep >= 2 ? 3 : currentStep + 1
            this.setState({
                ...this.state,
                text: name,
                currentStep: currentStep
            })
        }

        if (name === '') {

            let currentStep = this.state.currentStep
            // If the current step is 1 or 2, then add one on "next" button click
            currentStep = currentStep >= 2 ? 3 : currentStep + 1
            this.setState({
                ...this.state,
                currentStep: currentStep
            })
        }


    }

    prev = () => {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        if (currentStep === 2) {

            this.setState({
                ...this.state,
                currentStep: currentStep
            })
        }
        if (currentStep === 1) {
            this.setState({
                ...this.state,
                text: '',
                currentStep: currentStep
            })
        }
        this.props.dispatch(clearState())
    }
    previousButton = () => {
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary prev"
                    type="button"
                    onClick={this.prev}>
                    Previous
                </button>
            )
        }
        // ...else return nothing
        return null;
    }

    nextButton = () => {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={e => this.next(e, '')}>
                    Continue
                </button>
            )
        }
        // ...else render nothing
        return null;
    }

    render() {
        // console.log(this.state)
        // console.log(process.env)
        return (
            <div className="form-box">
                <form >
                    <StepOne
                        currentStep={this.state.currentStep}
                        handleClick={this.handleClick}
                        nextButton={this.nextButton}
                    />
                    <StepTwo
                        {...this.state}
                        currentStep={this.state.currentStep}
                        nextButton={this.nextButton}
                        previousButton={this.previousButton}
                        handleChange={this.handleChange}
                    />
                    <StepThree
                        {...this.state}
                        currentStep={this.state.currentStep}
                        previousButton={this.previousButton}
                        handleChange={this.handleChange}
                        handlePay={this.handlePay}
                        handleSubmit={this.handleSubmit}

                    />


                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        mapdata: state.mapdata
    }
}
export default connect(mapStateToProps)(FormBox);