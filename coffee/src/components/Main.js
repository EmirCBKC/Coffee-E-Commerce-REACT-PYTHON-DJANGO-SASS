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

            <div className='content mt-5 mb-5 d-flex flex-column justify-content-start align-items-center'>

                <div className='info mt-5 mb-5 row justify-content-around align-items-center'>
                    <h1 className='text-center'>INFO</h1>
                    <div className='info-1 col-3'>

                    </div>
                    <div className='info-2 col-3'>

                    </div>
                    <div className='info-3 col-3'>

                    </div>
                </div>

                <div className='blog-up mt-5 mb-5 row justify-content-around align-items-center'>
                <h1 className='text-center'>BLOG-1</h1>
                    <div className='blog-up-1 col-5'>

                    </div>
                    <div className='blog-up-2 col-5'>

                    </div>
                </div>

                <div className='blog-down mt-5 mb-5 row justify-content-around align-items-center'>
                <h1 className='text-center'>BLOG-2</h1>
                    <div className='blog-down-1 col-5'>

                    </div>
                    <div className='blog-down-2 col-5'>

                    </div>
                </div>

                <div className='about mt-5 mb-5 row justify-content-around align-items-center'>
                <h1 className='text-center'>ABOUT</h1>
                    <div className='about-1 col-3'>

                    </div>
                    <div className='about-2 col-3'>

                    </div>
                    <div className='about-3 col-3'>

                    </div>
                </div>

                <h1 className='text-center'>PRODUCTS</h1>
                <div className='products row justify-content-around align-items-center'>
                </div>

                <div className='contact-us mt-5 mb-5 row justify-content-around align-items-center'>
                <h1 className='text-center'>CONTACT-US</h1>
                    <div className='form col-5'>

                    </div>
                    <div className='map col-5'>

                    </div>
                </div>

                <div className='accordion-row mt-5 mb-5 row justify-content-around align-items-center'>
                <h1 className='text-center'>ACCORDION</h1>
                    <div className='accordion col-5'>

                    </div>
                </div>

                <div className='partner-row mt-5 mb-5 row justify-content-around align-items-center'>
                <h1 className='text-center'>PARTNERSHIP</h1> 
                    <div className='partner col-5'>

                    </div>
                </div>

            </div>
            
            <MyFooter />
        </>
    )
}

export default Main;