import styles from '../../styles/NavBar.module.scss'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'; 
import  Link  from 'next/link'

function NavBar() {

    return(
        <Container className={styles["nav-container"]}>
            <Row className={styles["nav-brand"]}>
                <Image 
                    src="/assets/images/bsblogo.png"
                    className={styles["logo"]}
                    alt="Brian S. Boros Logo"
                    width={128}
                    height={58}>
                </Image> 
            </Row>
            <Row className={["nav"]}>
                <Col className={styles["nav-item"]}>
                    <Link href="/" >
                        <a alt="home page">Home</a>
                    </Link>
                </Col>
                <Col className={styles["nav-item"]}>
                    <Link href="/portfolio">
                        <a alt="portfolio page">Portfolio</a>
                    </Link>
                </Col>
                <Col  className={styles["nav-item"]}>
                    <Link href="/blog">
                        <a alt="blog page">Blog</a>
                    </Link>
                </Col> 
            </Row>
        </Container>
    )
}

export default NavBar 