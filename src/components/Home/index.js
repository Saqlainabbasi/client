import React from 'react'
import Brand from '../Brand'
import Cars from '../Cars'
import Footer from '../footer'
import Reviews from '../Reviews'
import TaxiService from '../TaxiService'
import Travel from '../Travel'

function Home() {
    return (
        <div >
            <TaxiService />
            <Brand />
            <Travel />
            <Cars />
            <Reviews />
            <Footer />
        </div>
    )
}

export default Home
