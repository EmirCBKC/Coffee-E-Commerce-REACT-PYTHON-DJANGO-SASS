import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import video_header from './video/header.mp4'
import video_cup from './video/cup.mp4'
import video_beans from './video/beans.mp4'
import blogKapak from './img/kapak.png'
import blogCup from './img/kapaksız.png'
import blogDownImage from './img/blog-down.png'
import { Route, Routes } from 'react-router-dom';
import './Main.scss';

function Home() {

    useEffect(() => {
        AOS.init();
    }, []);

    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8000/posts/?format=json")
    //         .then(response => {
    //             setPosts(response.data);
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    return (
        <>

            <div className='header mt-4'>
                <video width="100%" height="100%" autoPlay loop muted>
                    <source src={video_header}></source>
                </video>
            </div>

            <div className='content mb-5 d-flex flex-column justify-content-start align-items-center'>
                <div className='background-info'>
                    <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='info mt-5 mb-5 p-5 row justify-content-around align-items-center'>
                            <h1 className='text-center'>DISCOVER COFFEE</h1>
                            <div className='info-1 mt-5 mb-5 col-xxl-3 col-xl-3 col-lg-8 col-md-10 col-sm-12 col-xs-12 p-5'>
                                <h2 className='text-center'>Coffee Varieties</h2>
                                <p>Explore a diverse range of coffee varieties, from bold and robust to mild and delicate.</p>
                                <p>Discover unique flavor profiles that cater to different preferences, making every sip an adventure.</p>
                                <p>Experience the intricate balance of acidity, body, and aroma in each carefully crafted cup.</p>
                                <p>Whether you enjoy a classic espresso or a flavored blend, our selection has something for everyone.</p>
                                <p>Indulge in the richness of single-origin coffees or the harmonious blends that tell a story in every cup.</p>
                            </div>
                            <div className='info-2 mt-5 mb-5 col-xxl-3 col-xl-3 col-lg-8 col-md-10 col-sm-12 col-xs-12 p-5'>
                                <h2 className='text-center'>Coffee Origins</h2>
                                <p>Dive into the origins of coffee beans, tracing the unique flavors back to different regions worldwide.</p>
                                <p>Explore the distinct taste profiles influenced by altitude, climate, and soil conditions.</p>
                                <p>Experience the fruity notes of African beans or the chocolaty undertones of South American ones.</p>
                                <p>Each origin brings a tale of craftsmanship, connecting you to the passionate farmers and their lands.</p>
                                <p>From the highlands of Ethiopia to the plantations of Colombia, every bean carries the essence of its birthplace.</p>
                            </div>
                            <div className='info-3 mt-5 mb-5 col-xxl-3 col-xl-3 col-lg-8 col-md-10 col-sm-12 col-xs-12 p-5'>
                                <h2 className='text-center'>Coffee Presentations</h2>
                                <p>Experience the art of coffee presentation, where every cup is a blend of taste and visual appeal.</p>
                                <p>Admire the intricate latte art that adorns your cappuccino, a testament to barista skills.</p>
                                <p>From the gentle pour-over method to the elegance of a French press, witness coffee-making as a performance.</p>
                                <p>Enjoy the immersive experience of a coffee tasting, where aromas and flavors dance on your palate.</p>
                                <p>Whether it's a simple morning ritual or a special occasion, our coffee presentations elevate the moment.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='first-image-row row justify-content-around align-items-center'>
                    <div className='first-image col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>

                    </div>
                </div>

                <div className='background-blog-up'>
                    <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='blog-up mt-5 mb-5 p-5 row justify-content-around align-items-center'>
                            <h1 className='text-center'>COFFEE CUPS</h1>
                            <div className='blog-up-1 mt-5 flex-column mb-5 p-5 col-xxl-7 col-xl-7 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={video_cup}></source>
                                </video>
                                <h2 className='text-center mt-5 mb-4'>Eco-Friendly Choice</h2>
                                <p>Our special coffee cardboard cups are crafted from sustainable materials, reducing environmental impact.
                                    Experience guilt-free sips while enjoying your favorite brews in cups designed with the planet in mind.
                                    These cups are fully biodegradable and compostable, making them a responsible choice for our ecosystem.
                                    By choosing our eco-friendly cups, you're contributing to a greener future and minimizing waste.</p>
                                <p>Join the movement towards sustainability by embracing these cups as an alternative to traditional options.
                                    Feel good about your coffee habits knowing that your daily ritual supports environmentally conscious practices.
                                    Our commitment to sustainability extends from sourcing to production, ensuring a positive impact.
                                    Enjoy your drinks without compromising taste or quality while making a positive change.</p>
                            </div>
                            <div className='blog-up-2 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center col-xxl-5 col-xl-5 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <div className='cup d-flex flex-column justify-content-center align-items-center'>
                                    <img className='kapak' alt='' src={blogKapak} width="60%"></img>
                                    <img className='bardak' alt='' src={blogCup} width="80%"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='second-image-row row justify-content-around align-items-center'>
                    <div className='second-image col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>

                    </div>
                </div>

                <div className='background-blog-down'>
                    <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='blog-down mt-5 mb-5 p-5 row justify-content-around align-items-center'>
                            <h1 className='text-center'>COFFEE BEANS</h1>
                            <div className='blog-down-1 d-flex justify-content-center mt-5 mb-5 col-xxl-5 col-xl-5 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <img alt='' src={blogDownImage} width="70%"></img>
                            </div>
                            <div className='blog-down-2 mt-5 mb-5 p-5 col-xxl-7 col-xl-7 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={video_beans}></source>
                                </video>
                                <h2 className='text-center mt-5 mb-4'>From Farm to Cup</h2>
                                <p>Embark on a journey through our coffee beans, from their origins to the final brewed cup.
                                    Our carefully selected beans hail from renowned coffee-growing regions across the globe.
                                    Explore diverse flavor profiles influenced by unique soil, climate, and altitude conditions.
                                    Whether from the Ethiopian highlands or the Colombian hills, each bean carries its origin's essence.</p>
                                <p>Experience the world in every sip, as beans bring their terroir's taste to your coffee cup.
                                    Artisanally harvested and roasted, our beans undergo meticulous crafting to ensure excellence.
                                    Meticulous roasting techniques develop rich aromas and flavor profiles in each bean.
                                    Appreciate the journey from green to roasted as it brings out individual personalities and characters.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='third-image-row row justify-content-around align-items-center'>
                    <div className='third-image col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>

                    </div>
                </div>

                <div className='background-about-us'>
                    <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='about mt-5 mb-5 row justify-content-around align-items-center'>
                            <h1 className='text-center'>ABOUT US</h1>
                            <div className='about-1 mt-5 mb-5 p-5 col-xxl-3 col-xl-3 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <h2 className='text-center'>Freshness at Its Best</h2>
                                <p>At our coffee shop, we take pride in keeping our coffees impeccably fresh.</p>
                                <p>We source the finest beans and employ careful storage methods to preserve their aroma and taste.</p>
                                <p>With each cup, you're experiencing the vibrant and rich flavors we're dedicated to delivering.</p>
                            </div>
                            <div className='about-2 mt-5 mb-5 p-5 col-xxl-3 col-xl-3 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <h2 className='text-center'>Safe Coffee Deliveries</h2>
                                <p>Your safety is our priority, and that extends to our coffee deliveries.</p>
                                <p>We ensure all deliveries are made with the highest hygiene standards in mind.</p>
                                <p>From packaging to delivery, your coffee arrives at your doorstep with care and safety in focus.</p>
                            </div>
                            <div className='about-3 mt-5 mb-5 p-5 col-xxl-3 col-xl-3 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <h2 className='text-center'>Decades of Expertise</h2>
                                <p>With a legacy dating back to 1998, we've been committed to the art of coffee for over two decades.</p>
                                <p>Our journey started with a passion for quality and an appreciation for the perfect cup.</p>
                                <p>Through the years, we've cultivated expertise that's reflected in every coffee we serve.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='four-image-row row justify-content-around align-items-center'>
                    <div className='four-image col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>

                    </div>
                </div>

                <div className='background-products'>
                    <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='products mt-5 mb-5 row justify-content-around align-items-center'>
                            <h1 className='text-center'>PRODUCTS</h1>
                            {/* <div>
                                <h1>Posts</h1>
                                <ul>
                                    {posts.map(post => (
                                        <div key={post.id}>
                                            <li >{post.postDesc}</li>
                                            <li >{post.title}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className='background-contact-us'>
                    <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='contact-us mt-5 mb-5 row justify-content-around align-items-center'>
                            <h1 className='text-center'>CONTACT-US</h1>
                            <div className='form mt-5 mb-5 p-5 col-xxl-5 col-xl-5 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <h2 className='text-center'>Freshness at Its Best</h2>
                                <p>At our coffee shop, we take pride in keeping our coffees impeccably fresh.</p>
                                <p>We source the finest beans and employ careful storage methods to preserve their aroma and taste.</p>
                                <p>With each cup, you're experiencing the vibrant and rich flavors we're dedicated to delivering.</p>
                            </div>
                            <div className='map mt-5 mb-5 p-5 col-xxl-5 col-xl-5 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <h2 className='text-center'>Freshness at Its Best</h2>
                                <p>At our coffee shop, we take pride in keeping our coffees impeccably fresh.</p>
                                <p>We source the finest beans and employ careful storage methods to preserve their aroma and taste.</p>
                                <p>With each cup, you're experiencing the vibrant and rich flavors we're dedicated to delivering.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='background-accordion'>
                    <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='accordion-row mt-5 mb-5 row justify-content-around align-items-center'>
                            <h1 className='text-center'>ACCORDION</h1>
                            <div className='accordion mt-5 mb-5 p-5 col-xxl-5 col-xl-5 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <h2 className='text-center'>Freshness at Its Best</h2>
                                <p>At our coffee shop, we take pride in keeping our coffees impeccably fresh.</p>
                                <p>We source the finest beans and employ careful storage methods to preserve their aroma and taste.</p>
                                <p>With each cup, you're experiencing the vibrant and rich flavors we're dedicated to delivering.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='background-partner'>
                    <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='partner-row mt-5 mb-5 row justify-content-around align-items-center'>
                            <h1 className='text-center'>PARTNERSHIP</h1>
                            <div className='partner mt-5 mb-5 p-5 col-xxl-5 col-xl-5 col-lg-8 col-md-10 col-sm-12 col-xs-12'>
                                <h2 className='text-center'>Freshness at Its Best</h2>
                                <p>At our coffee shop, we take pride in keeping our coffees impeccably fresh.</p>
                                <p>We source the finest beans and employ careful storage methods to preserve their aroma and taste.</p>
                                <p>With each cup, you're experiencing the vibrant and rich flavors we're dedicated to delivering.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <MyFooter />
        </>
    )
}

export default Home;