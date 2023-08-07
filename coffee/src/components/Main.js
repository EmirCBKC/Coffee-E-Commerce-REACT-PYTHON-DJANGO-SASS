import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import video from './video/video.mp4'
import './Main.scss';

function Main() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <MyNavbar />
            <div className='content'>

                <div className='header'>
                    <video width="100%" height="1070px" autoPlay loop muted>
                        <source src={video}></source>
                    </video>
                </div>

            </div>
            <MyFooter />
        </>
    )
}

export default Main;