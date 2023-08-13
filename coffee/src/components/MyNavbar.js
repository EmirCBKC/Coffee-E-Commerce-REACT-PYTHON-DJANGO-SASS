import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function MyNavbar() {
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand href="#"><FontAwesomeIcon icon={faCoffee} size="2xl" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1">Products</Nav.Link>
                            <Nav.Link href="#action1">About Us</Nav.Link>
                            <Nav.Link href="#action1">Contact Us</Nav.Link>
                        </Nav>
                        <FontAwesomeIcon className='basket-btn me-4' icon={faBasketShopping} size="2xl" />
                        <FontAwesomeIcon className='user-btn me-2' icon={faUser} size="2xl" />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar;