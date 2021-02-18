import React from 'react'
import Button from 'react-bootstrap/esm/Button'


function Cars() {
    return (
        <div className="session-car">
            <div className="container">

                <div className="section-title">
                    <h2>Book what you need</h2>
                    <p>Magnam dolores commodi suscipit consequatur ex aliquid.Magnam dolores commodi suscipit consequatur ex aliquid suscipit consequatur ex aliquid</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                            <div className="car-two" ></div>
                            <Button variant="primary">Salon (4 Person)</Button>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                            <div className="car-one" ></div>
                            <Button variant="primary">Hackbock (4 Person)</Button>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                            <div className="car-three" ></div>
                            <Button variant="primary">MPV (7 Person)</Button>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                            <div className="car-four" ></div>
                            <Button variant="primary">SUV (7 Person)</Button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cars
