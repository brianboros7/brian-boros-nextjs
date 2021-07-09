import { gql } from "@apollo/client"
import styles from '../../styles/ArticlePage.module.scss'
import client from "../../lib/apolloClient"
import Image from 'next/image'
import Header from '../../components/header/Header'
import { Container, Row, Col } from 'react-bootstrap'

// Checkout this guide: https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data
const ArticlePage = ({ article }) => {
  return (
    <div className={styles['article-page']}>
      <Header /> 
      <Container className={styles['article-page-content']}> 
        <Row lg={12}>
          <Image
            src={article.image[0].url}
            className={styles['blog-header-image']}
            alt="blog header image"
            width={1138}
            height={500}
          />
        </Row> 
        <Row> 
          <Col> 
            <div className={styles['article-info']}>
              <p className={styles['article-page-title']}>Title: {article.title}</p>
              <p className={styles['article-page-author']}>Author: {article.author}</p>
              <p className={styles['article-page-date']}>Date: {article.published_at}</p>
            </div>
            <div className={styles['article-page-body-container']}>
              <p className={styles['article-page-body']}>{article.body}</p> 
            </div>
          </Col> 
        </Row> 
      </Container> 
    </div>
  )
}

export default ArticlePage

// Basically copy pasted this from: https://nextjs.org/docs/basic-features/data-fetching#fallback-false
// And adjust for this use case using graphql
export async function getStaticPaths() {
  // Return a list of possible value for id
  // We need to fetch all the articles
  const { data } = await client.query({
    query: gql`
      query Articles {
        articles {
          id
          image {
            id
            url
          }
          title
          author
          published_at
          body
        }
      }
    `,
  })

  // Get the paths we want to pre-render based on posts
  const paths = data.articles.map((article) => ({
    params: { id: article.id },
  }))
  console.log(paths)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  }
}

// Basically copy pasted this from: https://nextjs.org/docs/basic-features/data-fetching#fallback-false
// And adjust for this use case using graphql
// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the article `id`.
  // If the route is like /blog/1, then params.id is 1
  const { data } = await client.query({
    // Here we params object that contains our id variable for the graphql query
    variables: params,
    query: gql`
      query SingleArticle($id: ID!) {
        article(id: $id) {
          id
          image {
            id
            url
          }
          title
          author
          published_at
          body
        }
      }
    `,
  })

  // Pass article data to the page via props
  return {
    props: {
      article: data.article,
    },
  }
}