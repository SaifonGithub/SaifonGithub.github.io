import React from 'react';
import './HeroSection.css';
import {Button} from './Button';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container' >
        <video src='/Videos/video (1).mp4' autoPlay loop muted />
            <h1>GET STUNNING WEBSITES </h1>
            <p> Websites Enhances Your Bussiness</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    TRY FOR FREE
                 <i className='fas fa-arrow-right'/>
                 </Button>   

            </div>
        </div>
    )
}

export default HeroSection
