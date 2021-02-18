import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function Reviews() {
    return (
        <div className="session-reviews">
            <div className="review-wrapper container">
                <div className="review-item-one">
                    <div className="review-text">
                        <h4>Custom Reviews</h4>
                        <div className="review-item">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-left">
                                        <h6>Customer Name</h6>
                                    </div>
                                    <div className="text-right">

                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <p>In my case, to access the images from css/scss, had to move the images directory as well as fonts, to the src directory. After which i was able to refer them</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-item">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-left">
                                        <h6>Customer Name</h6>
                                    </div>
                                    <div className="text-right">

                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <p>In my case, to access the images from css/scss, had to move the images directory as well as fonts, to the src directory. After which i was able to refer them</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-item-two">
                    <div className="review-form">
                        <h4>Drop us a Line</h4>
                        <form >
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                            </div>
                        </form>
                        <Button variant="primary">Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
