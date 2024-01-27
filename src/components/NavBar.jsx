import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import img from '../assets/slice.png';
import { Link } from 'react-router-dom'
import './NavBar2.css'

function NavBar() {
    return (
        <>
            <Navbar bg='danger' collapseOnSelect expand="lg" /* className="bg-body-tertiary" */>
                <Container>
                    {<Navbar.Brand href="#home"></Navbar.Brand>}
                    {<Navbar.Toggle aria-controls="responsive-navbar-nav" />}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navizquierdo me-auto">
                            <div className='navizquierdo1'>
                                <Link to="/" href="#features"><FcHome size={35} /></Link>
                                <Link to="/" className="text-white" href="#features">Home</Link>
                            </div>

                            <div className='navizquierdo2'>
                                <Link to="contacto" href="#features"><FcContacts size={35} /></Link>
                                <Link to="contacto" className="text-white" href="#pricing">Contacto</Link>
                            </div>


                        </Nav>
                        <Nav >
                            <div className='navderecho'>
                                <Link to="/" className="text-white"  href="#memes"> Happy cake </Link>

                                <Link to="/"><img src={img} alt="" width={35} /></Link>
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;