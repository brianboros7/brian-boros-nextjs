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
                    width={100}
                    height={100}>
                </Image> 
            </Row>
            <Row className={["nav"]}>
                <Col className={styles["nav-item"]}>
                    <Link href="/" >
                        <a>Home</a>
                    </Link>
                </Col>
                <Col className={styles["nav-item"]}>
                    <Link href="/portfolio">
                        <a>Portfolio</a>
                    </Link>
                </Col>
                <Col  className={styles["nav-item"]}>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </Col> 
            </Row>
        </Container>
    )
}

export default NavBar 