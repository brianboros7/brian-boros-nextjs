import { Navbar, Nav } from 'react-bootstrap'
import styles from '../../../styles/NavBar.module.scss'


function NavBar() {

    return(
        <Navbar bg="none" expand="lg">
            <Navbar.Brand className={styles["fontColor"]} href="#">Brian S. Boros</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> 
                    <Nav.Link className={styles["fontColor"]}  href="#home">Home</Nav.Link>
                    <Nav.Link className={styles["fontColor"]} href="#Link">Portfolio</Nav.Link>
                    <Nav.Link className={styles["fontColor"]} href="#link">Blog</Nav.Link>
                </Nav> 
            </Navbar.Collapse> 
        </Navbar>
    )
}

export default NavBar 