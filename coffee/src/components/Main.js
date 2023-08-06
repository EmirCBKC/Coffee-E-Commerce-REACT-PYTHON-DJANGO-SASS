import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import MyNavbar from './MyNavbar';
import './Main.scss';

function Main() {

    useEffect(() => {
        AOS.init(); // AOS'u başlatın
    }, []);

    return (
        <>
            <MyNavbar/>
            <FontAwesomeIcon className='mt-5 ms-5' icon={faCoffee} size="2xl"/>
            <h1 className='mt-2 ms-5'>Coffee</h1>
        </>
    )
}

export default Main;