import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image';
import Header from '../components/app/header/Header'
import {Container, Row, Col} from 'react-bootstrap'; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian S.  Boros | Home</title>
      </Head>

      <main> 
        <Header />
        <Container className="home-container">
            <Row className="home-main"> 
                <Col xs={7} lg={8} className="home-main-content">
                    <h4 className=""> 
                        let me help you build a
				                growth strategy, driven 
				                by data
                    </h4>
                    <h5 className="">
                        Hi, I'm Brian Boros! I'm here to work with you
				                to build, test, and learn how we can grow our accuracy
				                with your go-to-market strategies.
                    </h5>
                </Col> 
                <Col xs={5} lg={4} className="home-main-image"> 
                  <Image
                    src="/assets/images/brian-main.png"
                    alt="Brian S. Boros Palying Sax"
                    layout="fill"
                  />
                </Col> 
            </Row> 
        </Container> 
      </main>
    </div>
  )
}
