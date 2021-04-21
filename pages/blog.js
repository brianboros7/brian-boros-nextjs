import styles from '../styles/Blog.module.scss'
import Image from 'next/image'
import Header from '../components/app/header/Header'
import {Container, Row} from 'react-bootstrap'

function Blog() {

    return(
        <div>
            <Header /> 
            <Container className={styles["blog-container"]}>
                <Row className={styles["blog-header"]}>
                    <div className={styles["blog-header-image"]}>
                        <Image
                            src="/assets/images/bsb-hireme.png"
                            className={styles["bsb-hire-me"]}
                            alt="Brian S. Boros hire me photo"
                            width={1140}
                            height={250}
                            >
                        </Image>
                    </div>
                </Row>
                <Row>
                    <h1>Blog</h1>


                </Row>
            </Container>
        </div>
    )
}

export default Blog 