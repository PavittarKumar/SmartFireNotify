import React from 'react';
import Iframe from 'react-iframe';
import LOGO from './LOGO.png'
// import loader from 'google-maps';
// import Frame from 'react-frame-component';
import './FireAlarm.css';
// import { findAllByTestId } from '@testing-library/react';
// import { Loader } from 'google-maps';



const FireAlarm =() =>{
    return(
        <div>
            <img src={LOGO} className="logo pa4" alt="logo" />
        
            <div className=" trans" onLoad='test()'>

                
        
        <Iframe
        // url="https://www.emailondeck.com/eod.php"
        // url="https://www.tempmail.altmails.com/"
        // url="https://www.fakemail.net/"
        url="https://www.mail2world.com/app/"
        height="300px"
        width="900"
        frameBorder="0"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowtransparency="yes"
        onLoad= "alert('Hello')"
        />
        </div>
        </div>

        
       
    );
}

export default FireAlarm;