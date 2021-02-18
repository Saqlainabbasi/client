import React, { Component } from 'react';
import arrow from '../../images/arrow.svg';
import taxi from '../../images/taxi.svg';
import planTwo from '../../images/planTwo.svg';
import planOne from '../../images/planOne.svg';

class StepOne extends Component {
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <div className="formbox-one">
                    <div className='d-flex flex-column justify-content-between h-100' >
                        <div>
                            <div className="to-Airport b-wrapper" id="to-Airport" onClick={e => this.props.handleClick(e, 'to')}>
                                <div className="b-one"><img src={planOne} alt="planOne" /></div>
                                <div className="b-two">  To Airport</div>
                                <div className="b-three"><img src={arrow} alt="arrow" /></div>

                            </div>
                            <div className="type-two b-wrapper" onClick={e => this.props.handleClick(e, 'from')}>
                                <div className="b-one"><img src={planTwo} alt="planTwo" /></div>
                                <div className="b-two">  From Airport</div>
                                <div className="b-three"><img src={arrow} alt="arrow" /></div>
                            </div>
                            <div className="type-three b-wrapper" onClick={e => this.props.handleClick(e, '')}>
                                <div className="b-one"><img src={taxi} alt="taxi" /></div>
                                <div className="b-two">Standard Booking</div>
                                <div className="b-three"><img src={arrow} alt="arrow" /></div>
                            </div>

                        </div>
                        <div>
                            {this.props.nextButton()}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepOne;