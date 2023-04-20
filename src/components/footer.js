import React from 'react';
import './footer.css';
import logoUCLA from '../components/pages/media/ucla_engineering_logo_300.jpg'

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerInfo'>
                <div className='InfoItem'>
                    <p><img src = {logoUCLA} alt ='UCLA'/></p>
                    <p>
                        Department of Civil and Environmental Engineering
                        Los Angeles, CA 90095</p>
                </div>
                <div className='InfoItem'>
                    <h1> Main Contact: </h1>
                    <p>Sriram Narasimhan <br></br>Email: snarasim@ucla.edu</p>
                </div>
            </div>

        <div className='footerBar'>
            <div className='website-rights'>
            <b>© 2023 Sensing &amp; Robotics for Infrastructure Lab</b>
            </div>
        </div>    
        </div>
    )
}

export default Footer;
