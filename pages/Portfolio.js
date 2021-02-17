import styles from '../styles/Portfolio.module.scss'
import Header from '../components/app/header/Header'
import {Container, Row} from 'react-bootstrap'

function Portfolio() {

    return(
        <div>
            <Header /> 
            <Container className={["portfolio-container"]}>
                <Row>
                    <h1>Hello World </h1>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio 