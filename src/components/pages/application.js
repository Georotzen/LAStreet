import React from 'react';
import './application.css'
import StreetSearch from './filtersearch';
import NavbarDark from './navbardark';
import Map from './map.js'
import Update from './updateMapillary';
import './updateMapillary.css';
import CarouselFade from './carouselfade'

function Application () {
    return (
        <div className='application'>
            <div className='intro'>
                <h1>Hillside Street Prioritization Application</h1>
            </div>

            <div className='carousel'>
            <CarouselFade/>
            </div>

            <div className='text-center'>
                <Map/>
           </div>

            <div className='streetView2'>
            <NavbarDark/>
            </div>

            <div className='btnSearch'>
            <StreetSearch/>
            </div>

            <div className='geoMargin'>
                <Update/>
            </div>
         {/* <init></init> */}
         {/* <RenderMapillary/> */}
        </div>
    );
}

export default Application;
