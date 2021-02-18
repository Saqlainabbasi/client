import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert'
// import PopupModal from '../Payment/PopupModal';
import { Modal, Button } from 'react-bootstrap';
import Pay from '../Payment/Pay';

class StepThree extends Component {
    state = {
        show: false
    }
    handleModal = () => {
        this.setState({
            show: true
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        let data = this.props.mapdata;
        if (this.props.currentStep !== 3) { // Prop: The current step
            return null
        }
        return (
            <div className="step-box step-three">
                {this.state.show ?
                    <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.props.formdata.userEmail !== "" ?
                                <Pay amount={data.cabFare} email={this.props.formdata.userEmail} handleClose={this.handleClose} />
                                : <span className='text-danger'>"Please Enter Your Details..!! Email Required"</span>}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                        </Button>

                        </Modal.Footer>
                    </Modal>
                    : null}
                <div className="box-item-one">
                    {data.booking.post ?

                        // data.cab ? null : this.props.mapdata.booking ?
                        <Alert variant='success'>
                            Cab Booked successfuly....!!
                            {data.booking.message}
                        </Alert>
                        : data.cabRule.cab ?
                            <div className="box-p-wrapper">
                                <div className="p-one">
                                    <p>Pick Location</p>
                                    <div className='tooltip'><h5>{data.startPoint.sAdrs}</h5>
                                        <span className='tooltiptext'>{data.startPoint.sAdrs}</span>
                                    </div>
                                </div>
                                <div className="p-two">
                                    <p>Drop Location</p>
                                    <div className='tooltip'><h5>{data.endPoint.eAdrs}</h5>
                                        <span className='tooltiptext'>{data.endPoint.eAdrs}</span>
                                    </div>
                                </div>
                                <div className="p-three">
                                    <p>Vehical</p>
                                    <h5>{this.props.formdata.cabName}</h5>
                                </div>
                                <div className="p-four">
                                    <p>Total Miles</p>
                                    <h5>{Math.round(data.km)}</h5>
                                </div>
                                <div className="p-five">
                                    <p>Estimated Price</p>
                                    <h5>Rs {data.cabFare}</h5>
                                </div>
                            </div>
                            : null
                    }
                </div>
                <div className="box-item-two">
                    <div className="formbox-two">
                        <div className="data-wrapper">
                            <div className="data-item-one">
                                <h5>Your Details</h5>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" onChange={e => this.props.handleChange(e, 'userName')} />

                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-4">
                                            <select className="form-control">
                                                <option value>ap1</option>
                                                <option value>ap2</option>
                                                <option value>ap3</option>
                                                <option value>ap4</option>
                                            </select>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" className="form-control" placeholder="Phone No" onChange={e => this.props.handleChange(e, 'phoneNo')} />
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <input type="email" className="form-control" placeholder="Email" onChange={e => this.props.handleChange(e, 'userEmail')} />

                                </div>
                            </div>
                            <div className="data-item-two">
                                <h5>Payment</h5>
                                <div className="pay-wrapper" onClick={e => this.props.handlePay(e, 'Paypal')} >
                                    <div className="pay-item-one"></div>
                                    <div className="pay-item-two">Paypal</div>
                                </div>
                                <div className="pay-wrapper" onClick={this.handleModal}>
                                    <div className="pay-item-one"></div>
                                    <div className="pay-item-two">Card</div>
                                </div>
                                <div className="pay-wrapper" onClick={e => this.props.handlePay(e, 'Cash')}>
                                    <div className="pay-item-one"></div>
                                    <div className="pay-item-two">Cash to Driver</div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            {this.props.previousButton()}
                            {this.props.mapdata.cab ? null
                                : this.props.mapdata.cabRule.cab ? <input type="button" className="btn btn-success" value="Book Cab" onClick={e => this.props.handleSubmit(e)} /> : null
                            }
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        mapdata: state.mapdata
    }
}
export default connect(mapStateToProps)(StepThree);