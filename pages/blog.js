import styles from '../styles/Blog.module.scss'
// import Image from 'next/image'
import Header from '../components/header/Header'
import { Container, Row } from 'react-bootstrap'
import BlogCard from '../components/cards/BlogCard'

function Blog() {

    return(
        <div className={styles["blog-page"]}>
            <Header /> 
            <div className={styles["blog-wrapper"]}>
                <Container className={styles["blog-container"]}>
                    <Row>
                        <h1>Blog Page</h1>
                    </Row>
                    <Row>
                        <div>
                            <BlogCard /> 
                        </div> 
                    </Row>
                </Container>  
            </div>
        </div>
    )
}

export default Blog 