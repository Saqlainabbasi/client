import React from 'react';
import fb from '../images/fb.svg';
import be from '../images/be.svg';
import insta from '../images/insta.svg';
import youtube from '../images/youtube.svg';
function Footer() {
    return (
        <div className="session-footer">
            <div className="footer-text container">
                <div className="footer-item">
                    <div className="row">
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a href="#">Cool stuff</a></li>
                                <li><a href="#">Random feature</a></li>
                                <li><a href="#">Team feature</a></li>
                                <li><a href="#">Stuff for developers</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a href="#">Resource</a></li>
                                <li><a href="#">Resource name</a></li>
                                <li><a href="#">Another resource</a></li>
                                <li><a href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Locations</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="footer-item">
                    <div className="social text-right">
                        <h4>Follow us</h4>
                        <ul className="list-unstyled text-small">
                            <li><a href="#"><img src={fb} alt="fb" /></a></li>
                            <li><a href="#"><img src={be} alt="be" /></a></li>
                            <li><a href="#"><img src={youtube} alt="youtube" /></a></li>
                            <li><a href="#"><img src={insta} alt="insta" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <p> Copyright @ 2021 All right Reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
