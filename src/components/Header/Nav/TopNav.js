import { Navbar, Nav } from 'react-bootstrap'

import React from 'react'
import { Link } from 'react-router-dom'

function TopNav() {
    return (
        <div className="wrap">
            <div className='container'>

                <Navbar collapseOnSelect expand="md" width='100%'>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto wrap-item-one">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/price" >price</Nav.Link>
                        </Nav>
                        <Nav>
                            <Navbar.Brand className='top wrap-item-two'>
                                <p>24/7 HELPLNE</p><h3>+11234 567890</h3>
                            </Navbar.Brand>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </div>

        </div>

    )
}

export default TopNav

