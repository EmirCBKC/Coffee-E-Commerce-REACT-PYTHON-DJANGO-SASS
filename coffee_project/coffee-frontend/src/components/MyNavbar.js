import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function MyNavbar() {
    // const [userRequest, setUserRequest] = useState("none");

    // const displayControl = () => {
    //     if (userRequest == "none") {
    //         setUserRequest("block");
    //     }
    //     else{
    //         setUserRequest("none")
    //     }
    // }

    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand>
                        <Nav.Link className='register-link d-flex justify-content-center align-items-center' as={Link} to="/home">
                            <FontAwesomeIcon icon={faCoffee} size="2xl" />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1">Products</Nav.Link>
                            <Nav.Link href="#action1">About Us</Nav.Link>
                            <Nav.Link href="#action1">Contact Us</Nav.Link>
                        </Nav>
                        <button className='basket-btn'><FontAwesomeIcon className='basket-btn me-4' icon={faBasketShopping} size="2xl" /></button>
                        <div className='user-request'>
                            <button className='user-btn'><FontAwesomeIcon className='user-btn me-2' icon={faUser} size="2xl" /></button>
                            <div className='request-info d-flex justify-content-center'>
                                <form className='user-form d-flex flex-column mt-4'>
                                    <div className='d-flex justify-content-between mt-2 mb-2'>
                                        <label for='username'>Username</label>
                                        <input type='text' id='username' name='username'></input>
                                    </div>
                                    <div className='d-flex justify-content-between mt-2 mb-2'>
                                        <label for='password'>Password</label>
                                        <input type='password' id='password' name='password'></input>
                                    </div>
                                    <div className='request-btns d-flex justify-content-end'>
                                        <button className='login-btn me-4' type='submit'>Login</button>
                                        <Nav.Link className='register-link d-flex justify-content-center align-items-center' as={Link} to="/register">Register</Nav.Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar;