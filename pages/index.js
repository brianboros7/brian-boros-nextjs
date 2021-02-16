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
      <Header /> 
      <main> 
        <Container className={styles["home-container"]}>
          <Row className={styles["home-main"]}> 
            <Col xs={8} lg={6} className={styles["home-main-content"]}>
              <h2> 
                let me help you build a
				        growth strategy, driven 
				        by data
              </h2>
              <h3>
                Hi, I'm Brian Boros! I'm here to work with you
				        to build, test, and learn how we can grow our accuracy
				        with your go-to-market strategies.
              </h3>
            </Col> 
            <Col xs={4} lg={6} className={styles["home-main-image"]}> 
              <Image
                src="/assets/images/brian-main.png"
                className={["home-main-image"]}
                alt="Brian S. Boros Palying Sax"
                width={400}
                height={500}
              />
            </Col> 
          </Row> 
        </Container> 
      </main>
    </div>
    )
  }
