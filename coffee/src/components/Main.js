import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Main() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <h1 className='mt-5 ms-5'>COFFEE</h1>
            <FontAwesomeIcon className='mt-5 ms-5' icon={faCoffee} size="2xl" />
        </>
    )
}

export default Main;