import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function Travel() {
    return (
        <div className="session-travel">
            <div className="travel-wrapper container">
                <div className="travel-item">
                    <div className="travel-img">

                    </div>
                </div>
                <div className="travel-item">
                    <div className="travel-text text-right">
                        <h4>Reliable travel with!</h4>
                        <p>In my case, to access the images from css/scss, had to move the images directory as well as fonts, to the src directory. After which i was able to refer them in the css/scss files directly,</p>
                        <Button variant="primary">Travel To Airport</Button>
                        <Button variant="outline-primary">Travel From Airport</Button>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Travel

