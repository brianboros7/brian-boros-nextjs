import styles from '../../../styles/NavBar.module.scss'
import Image from 'next/image';
import {Container, Row, Col} from 'react-bootstrap'; 

function NavBar() {

    return(
        <Container className={styles["nav-container"]}>
            <Row className={styles["nav-brand"]}>
                <Image 
                    src="/assets/images/bsblogo.png"
                    className={["logo"]}
                    alt="Brian S. Boros Logo"
                    width={99}
                    height={99}>
                </Image> 
            </Row>
            <Row className={["nav"]}>
                <Col className={styles["nav-item"]}><a>Home</a></Col>
                <Col className={styles["nav-item"]}><a>Portfolio</a></Col>
                <Col  className={styles["nav-item"]}><a>Blog</a></Col> 
            </Row>
        </Container>
    )
}

export default NavBar 