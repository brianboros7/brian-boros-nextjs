import styles from '../../styles/ArticlePage.module.scss'
import { fetchAPI } from "../../lib/getStrapiUrl"
import Image from 'next/image'
import Header from '../../components/header/Header'
import { Container, Row, Col } from 'react-bootstrap'
// import matter from 'gray-matter'
// import { MDXRemote } from 'next-mdx-remote'
// import { serialize } from 'next-mdx-remote/serialize'
// import dynamic from 'next/dynamic'


const ArticlePage = ({ article }) => {

  return (
    <div className={styles['article-page']}>
      <Header /> 
      <Container> 
        <Row>
          <Image
            src={article.image[0].url}
            className={styles['article-header-image']}
            alt="blog header image"
            width={1138}
            height={500}
          />
        </Row> 
        <Row> 
          <div className={styles['article-info']}>
            <h4 className={styles['article-title']}>Title: {article.title}</h4>
            <h4 className={styles['article-author']}>Author: {article.author}</h4>
            <h4 className={styles['article-date']}>Date: {article.published_at}</h4>
          </div> 
          <div className={styles['article-body']}>
            <p>{article.body}</p>
          </div>
        </Row> 
      </Container> 
    </div>
  )
}

export default ArticlePage

export async function getStaticPaths() {
  // Return a list of possible value for id
  // We need to fetch all the articles
  const articles = await fetchAPI("/articles")

  // Get the paths we want to pre-render based on posts
  const paths = articles.map((article) => ({
    params: { id: String(article.id) },
  }))

  
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // params contains the article `id`.
  // If the route is like /blog/1, then params.id is 1
  const articles = await fetchAPI(`/articles?id=${params.id}`)

  // Pass article data to the page via props
  return {
    props: {
      article: articles[0],
    },
    revalidate: 1,
  }
}

// Checkout this guide: https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data
// ** https://nextjs.org/docs/basic-features/data-fetching#fallback-false
// ** https://nextjs.org/docs/basic-features/data-fetching#fallback-false