import styles from "../../styles/Blog.module.scss"
import { gql } from "@apollo/client"
import client from "../../lib/apolloClient"
import Link from 'next/link'
import Image from 'next/image'
// import BlogCard from '../../components/cards/BlogCard'
import Header from '../../components/header/Header'
import { Container, Row, Card } from 'react-bootstrap'

function Blog({ articles }) {
  return (
    <div className={styles["blog-page"]}>
      <Header /> 
      <Container> 
        <h1>Blog Page</h1>
        <Row> 
          {articles.map((article) => {
              return(
                <div className={styles['blog-articles']}> 
                  <Link  href={`/blog/${article.id}`}>
                    <Card className={styles['blog-card-container']} style={{ width: '23rem' }}>
                      <Image
                          src={article.image[0].url}
                          alt="blog card image thumbnail"
                          width={500}
                          height={250}
                      />
                      <a className={styles['blog-card-title']}><h1>{article.title}</h1></a> 
                    </Card>
                  </Link>
                </div> 
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
  const { data } = await client.query({
    query: gql`
      query Articles {
        articles {
          id
          image {
            url
          }
          title
          author
          date
        }
      }
    `,
  })

  /**
   * Now that you have the data pass it to your components props
   */
  return {
    props: {
      articles: data.articles,
    }, // will be passed to the page component as props
  }
}