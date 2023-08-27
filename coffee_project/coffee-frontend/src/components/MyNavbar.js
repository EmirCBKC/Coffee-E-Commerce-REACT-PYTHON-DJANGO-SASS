import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function MyNavbar() {

    const displayControl = () => {
        let divo = document.querySelector(".request-info");

        if (divo.style.display === "none") {
            divo.style.setProperty('display', 'block', 'important');
        } else {
            divo.style.setProperty('display', 'none', 'important');
        }
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.get("http://127.0.0.1:8000/users/?format=json");
    
            if (response.status === 200) {
                const users = response.data;
                const foundUser = users.find(user => user.username === username && user.password === password);
    
                if (foundUser) {
                    setIsLoggedIn(true);
                } else {
                    console.log("User not found");
                    console.log(foundUser)
                }
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };
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
                            <button className='user-btn' onClick={displayControl}><FontAwesomeIcon className='user-btn me-2' icon={faUser} size="2xl" /></button>
                            {isLoggedIn ? (
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        {username}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="profil/">Profil</a></li>
                                        <li><a className="dropdown-item" href="cikis/" onClick={handleLogout}>Çıkış Yap</a></li>
                                    </ul>
                                </div>
                            ) : (
                                <div className='request-info d-flex justify-content-center'>
                                    <form className='user-form m-auto d-flex flex-column mt-4' onSubmit={handleLogin}>
                                        <div className='d-flex justify-content-between mt-2 mb-2'>
                                            <label htmlFor='username'>Username</label>
                                            <input type='text' id='username' name='username' onChange={e => setUsername(e.target.value)}></input>
                                        </div>
                                        <div className='d-flex justify-content-between mt-2 mb-2'>
                                            <label htmlFor='password'>Password</label>
                                            <input type='password' id='password' name='password' onChange={e => setPassword(e.target.value)}></input>
                                        </div>
                                        <div className='request-btns d-flex justify-content-end'>
                                            <button className='login-btn me-4' type='submit'>Login</button>
                                            <Nav.Link className='register-link d-flex justify-content-center align-items-center' as={Link} to="/register">Register</Nav.Link>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar;