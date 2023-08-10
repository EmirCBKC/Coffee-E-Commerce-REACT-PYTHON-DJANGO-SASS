import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import video from './video/video.mp4'
import blogKapak from './img/kapak.png'
import blogCup from './img/kapaksız.png'
import blogDownImage from './img/blog-down.png'
import './Main.scss';

function Main() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <MyNavbar />

            <div className='header'>
                <video width="100%" height="100%" autoPlay loop muted>
                    <source src={video}></source>
                </video>
            </div>

            <div className='content mt-5 mb-5 d-flex flex-column justify-content-start align-items-center'>

                <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='info mt-5 mb-5 row justify-content-around align-items-center'>
                        <h1 className='text-center'>DISCOVER COFFEE</h1>
                        <div className='info-1 col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 p-5'>
                            <h2 className='text-center'>Coffee Varieties</h2>
                            <p>Explore a diverse range of coffee varieties, from bold and robust to mild and delicate.</p>
                            <p>Discover unique flavor profiles that cater to different preferences, making every sip an adventure.</p>
                            <p>Experience the intricate balance of acidity, body, and aroma in each carefully crafted cup.</p>
                            <p>Whether you enjoy a classic espresso or a flavored blend, our selection has something for everyone.</p>
                            <p>Indulge in the richness of single-origin coffees or the harmonious blends that tell a story in every cup.</p>
                        </div>
                        <div className='info-2 col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 p-5'>
                            <h2 className='text-center'>Coffee Origins</h2>
                            <p>Dive into the origins of coffee beans, tracing the unique flavors back to different regions worldwide.</p>
                            <p>Explore the distinct taste profiles influenced by altitude, climate, and soil conditions.</p>
                            <p>Experience the fruity notes of African beans or the chocolaty undertones of South American ones.</p>
                            <p>Each origin brings a tale of craftsmanship, connecting you to the passionate farmers and their lands.</p>
                            <p>From the highlands of Ethiopia to the plantations of Colombia, every bean carries the essence of its birthplace.</p>
                        </div>
                        <div className='info-3 col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 p-5'>
                            <h2 className='text-center'>Coffee Presentations</h2>
                            <p>Experience the art of coffee presentation, where every cup is a blend of taste and visual appeal.</p>
                            <p>Admire the intricate latte art that adorns your cappuccino, a testament to barista skills.</p>
                            <p>From the gentle pour-over method to the elegance of a French press, witness coffee-making as a performance.</p>
                            <p>Enjoy the immersive experience of a coffee tasting, where aromas and flavors dance on your palate.</p>
                            <p>Whether it's a simple morning ritual or a special occasion, our coffee presentations elevate the moment.</p>
                        </div>
                    </div>
                </div>

                <div className='first-image mt-5 mb-5 row justify-content-around align-items-center'>
                </div>

                <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='blog-up mt-5 mb-5 row justify-content-around align-items-center'>
                        <h1 className='text-center'>COFFEE CUPS</h1>
                        <div className='blog-up-1 p-5 col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                            <h2 className='text-center'>Eco-Friendly Choice</h2>
                            <p>Our special coffee cardboard cups are crafted from sustainable materials, reducing environmental impact.</p>
                            <p>Experience guilt-free sips while enjoying your favorite brews in cups designed with the planet in mind.</p>
                            <p>These cups are fully biodegradable and compostable, making them a responsible choice for our ecosystem.</p>
                            <p>By choosing our eco-friendly cups, you're contributing to a greener future and minimizing waste.</p>
                            <p>Join the movement towards sustainability by embracing these cups as an alternative to traditional options.</p>
                            <p>Feel good about your coffee habits knowing that your daily ritual supports environmentally conscious practices.</p>
                            <p>Our commitment to sustainability extends from sourcing to production, ensuring a positive impact.</p>
                            <p>Enjoy your drinks without compromising taste or quality while making a positive change.</p>
                            <p>Share the message of eco-consciousness with each cup, sparking conversations about responsible choices.</p>
                            <p>As you sip from these cups, you're savoring both flavor and a commitment to a healthier planet.</p>
                        </div>
                        <div className='blog-up-2 d-flex flex-column justify-content-center align-items-center col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                            <div className='cup d-flex flex-column justify-content-center align-items-center'>
                                <img className='kapak' alt='' src={blogKapak} width="50%"></img>
                                <img className='bardak' alt='' src={blogCup} width="70%"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='second-image mt-5 mb-5 row justify-content-around align-items-center'>
                </div>

                <div className='d-flex justify-content-between' style={{ width: "100%" }} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='blog-down mt-5 mb-5 row justify-content-between align-items-center'>
                        <h1 className='text-center'>COFFEE BEANS</h1>
                        <div className='blog-down-1 col-5'>
                            <img alt='' src={blogDownImage} width="90%"></img>
                        </div>
                        <div className='blog-down-2 me-5 p-5 col-5'>
                            <h2 className='text-center'>From Farm to Cup</h2>
                            <p>Embark on a journey through our coffee beans, from their origins to the final brewed cup.</p>
                            <p>Our carefully selected beans hail from renowned coffee-growing regions across the globe.</p>
                            <p>Explore diverse flavor profiles influenced by unique soil, climate, and altitude conditions.</p>
                            <p>Whether from the Ethiopian highlands or the Colombian hills, each bean carries its origin's essence.</p>
                            <p>Experience the world in every sip, as beans bring their terroir's taste to your coffee cup.</p>
                            <p>Artisanally harvested and roasted, our beans undergo meticulous crafting to ensure excellence.</p>
                            <p>Meticulous roasting techniques develop rich aromas and flavor profiles in each bean.</p>
                            <p>Appreciate the journey from green to roasted as it brings out individual personalities and characters.</p>
                            <p>Your cup of coffee, a testament to dedication, commitment, and passion at every step.</p>
                            <p>Sip, savor, and embrace the journey as you enjoy both flavor and the story behind your cup.</p>
                        </div>
                    </div>
                </div>

                <div className='three-image mt-5 mb-5 row justify-content-around align-items-center'>
                </div>

                <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='about mt-5 mb-5 row justify-content-around align-items-center'>
                        <h1 className='text-center'>ABOUT US</h1>
                        <div className='about-1 p-5 col-3'>
                            <h2 className='text-center'>Freshness at Its Best</h2>
                            <p>At our coffee shop, we take pride in keeping our coffees impeccably fresh.</p>
                            <p>We source the finest beans and employ careful storage methods to preserve their aroma and taste.</p>
                            <p>With each cup, you're experiencing the vibrant and rich flavors we're dedicated to delivering.</p>
                        </div>
                        <div className='about-2 p-5 col-3'>
                            <h2 className='text-center'>Safe Coffee Deliveries</h2>
                            <p>Your safety is our priority, and that extends to our coffee deliveries.</p>
                            <p>We ensure all deliveries are made with the highest hygiene standards in mind.</p>
                            <p>From packaging to delivery, your coffee arrives at your doorstep with care and safety in focus.</p>
                        </div>
                        <div className='about-3 p-5 col-3'>
                            <h2 className='text-center'>Decades of Expertise</h2>
                            <p>With a legacy dating back to 1998, we've been committed to the art of coffee for over two decades.</p>
                            <p>Our journey started with a passion for quality and an appreciation for the perfect cup.</p>
                            <p>Through the years, we've cultivated expertise that's reflected in every coffee we serve.</p>
                        </div>
                    </div>
                </div>

                <div className='four-image mt-5 mb-5 row justify-content-around align-items-center'>
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