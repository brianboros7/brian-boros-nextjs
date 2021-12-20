import styles from "../../styles/Blog.module.scss"
import { fetchAPI } from "../../lib/getStrapiUrl"
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/header/Header'
import { Container, Row, Col, Card } from 'react-bootstrap'
import BlogSearchMenu from '../../components/search/BlogSearchMenu'
function Blog({ articles, topics }) {

  return (
    <div className={styles["blog-page"]}>
      <Header /> 
      <Container className={styles["blog-container"]}> 
        <Row> 
          <h1>Blog Page</h1> 
        </Row> 
        <Row> 
          <div> 
              <BlogSearchMenu /> 
          </div> 
        </Row> 

        <Row className={styles["row"]}> 
          {articles.map((article) => {
            return(
              <div key={article.id}> 
                <Link  href={`/blog/${article.id}`}>
                  <Card style={{ width: '23rem' }}>
                    <Image
                      src={article.image[0].url}
                      alt="blog article image thumbnail"
                      width={500}
                      height={250}
                    />
                    <Card.Body> 
                      <Card.Title><a className={styles['title']}>{article.title}</a></Card.Title> 
                      <Card.Text className={styles['text']}>{article.date}</Card.Text> 
                    </Card.Body> 
                  </Card> 
                </Link>
              </div> 
              )
            })
          }
        </Row>
        <Row> 
          <Col> 
            {topics.map((topic) => {
                return(
                  <div key={topic.id}>
                    {topic.name}
                  </div>
                )
              })
            }
          </Col>
        </Row> 
      </Container> 
    </div>
  )
}

export default Blog

export async function getStaticProps() {
  /**
   * Here is where you fetch the data from Strapi using graphql
   * You could import this query from your graphql folder and just pass => query: GET_ARTICLES
  */
  const articles = await fetchAPI(`/articles`)
  const topics  = await fetchAPI(`/topics`)

  /**
   * Now that you have the data, pass it to your components props
  */
  return {
    props: {
      articles: articles,
      topics: topics, 
    }, // will be passed to the page component as props
    revalidate: 1,

  }

}