import styles from "../../styles/Blog.module.scss"
import { request, gql } from "graphql-request"
import { GET_ARTICLES } from '../../graphql/get-articles'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/header/Header'
import { Container, Row, Card } from 'react-bootstrap'
// import BlogCard from '../../components/cards/BlogCard'

function Blog({ articles }) {

  return (
    <div className={styles["blog-page"]}>
      <Header /> 
      <Container> 
        <h1>Blog Page</h1>
        <Row className={styles["row"]}> 
          {articles.map((article) => {
              return(
                <Link  href={`/blog/${article.id}`}>
                  <Card style={{ width: '23rem' }}>
                    <Image
                        src={article.image[0].url}
                        alt="blog card image thumbnail"
                        width={500}
                        height={250}
                    />
                    <Card.Body> 
                      <Card.Title><a className={styles['title']}>{article.title}</a></Card.Title> 
                      <Card.Text className={styles['text']}>{article.date}</Card.Text> 
                    </Card.Body> 
                  </Card> 
                </Link>
              )
          })}
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
  const { data } = await query({
    query: GET_ARTICLES
  })

  /**
   * Now that you have the data, pass it to your components props
  */
  return {
    props: {
      articles: data.articles,
    }, // will be passed to the page component as props
  }
}