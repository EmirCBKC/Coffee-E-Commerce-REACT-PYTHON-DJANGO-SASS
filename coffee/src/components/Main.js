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

            <div className='header'>
                <video width="100%" height="1070px" autoPlay loop muted>
                    <source src={video}></source>
                </video>
            </div>

            <div className='content mt-5 d-flex flex-column justify-content-start align-items-center'>

                <div className='info row justify-content-around align-items-center'>
                    <div className='info-1 col-3'>

                    </div>
                    <div className='info-2 col-3'>

                    </div>
                    <div className='info-3 col-3'>

                    </div>
                </div>

                <div className='blog-up row justify-content-around align-items-center'>
                    <div className='blog-up-1 col-5'>

                    </div>
                    <div className='blog-up-2 col-5'>

                    </div>
                </div>

                <div className='blog-down row justify-content-around align-items-center'>
                    <div className='blog-down-1 col-5'>

                    </div>
                    <div className='blog-down-2 col-5'>

                    </div>
                </div>

                <div className='about row justify-content-around align-items-center'>
                    <div className='about-1 col-3'>

                    </div>
                    <div className='about-2 col-3'>

                    </div>
                    <div className='about-3 col-3'>

                    </div>
                </div>

                <div className='products row justify-content-around align-items-center'>
                </div>

                <div className='contact-us row justify-content-around align-items-center'>
                    <div className='form col-5'>

                    </div>
                    <div className='map col-5'>

                    </div>
                </div>

                <div className='accordion-row row justify-content-around align-items-center'>
                    <div className='accordion col-5'>

                    </div>
                </div>

                <div className='partner-row row justify-content-around align-items-center'>
                    <div className='partner col-5'>

                    </div>
                </div>

            </div>
            <MyFooter />
        </>
    )
}

export default Main;