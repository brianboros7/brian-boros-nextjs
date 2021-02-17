import styles from '../styles/Blog.module.scss'
import Header from '../components/app/header/Header'
import {Container, Row} from 'react-bootstrap'

function Blog() {

    return(
        <div>
            <Header /> 
            <Container className={["blog-container"]}>
                <Row>
                    <h1>Hello World, Blog </h1>
                </Row>
            </Container>
        </div>
    )
}

export default Blog 