import React from 'react';
import Button from 'react-bootstrap/Button'
import FormBox from './FormBox/FormBox';


function TaxiService() {
    return (
        <div className="session-taxi">
            <div className="taxi-wrapper container">
                <div className="taxi-item-one">
                    <div className="row">
                        <div className="col-md-12 taxi-text">
                            <h4>Taxi Service</h4>
                            <h1>Easy . Fast . Secure</h1>
                            <p>In my case, to access the images from css/scss, had to move the images directory as well as fonts, to the src directory. After which i was able to refer them in the css/scss files directly,</p>

                            <Button variant="primary">Travel To Airport</Button>

                            <Button variant="outline-primary">Travel From Airport</Button>

                        </div>
                        <div className="col-md-12">
                            <div className="taxi-pic">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="taxi-item-two">
                    <div className="taxi-form">
                        <h4>Get a Qoute and Book!</h4>
                        <FormBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaxiService
