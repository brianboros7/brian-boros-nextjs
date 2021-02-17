import styles from '../../../styles/NavBar.module.scss'
import Image from 'next/image';
import {Container, Row, Col} from 'react-bootstrap'; 
import Link from 'next/link'

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
                <Col className={styles["nav-item"]}>
                    <Link href="/" >
                        <a className={["nav-link"]}>Home</a>
                    </Link>
                </Col>
                <Col className={styles["nav-item"]}>
                    <Link className={["nav-link"]} href="/portfolio">
                        <a className={["nav-link"]}>Portfolio</a>
                    </Link>
                </Col>
                <Col  className={styles["nav-item"]}>
                    <Link className={["nav-link"]} href="/blog">
                        <a className={["nav-link"]}>Blog</a>
                    </Link>
                </Col> 
            </Row>
        </Container>
    )
}

export default NavBar 