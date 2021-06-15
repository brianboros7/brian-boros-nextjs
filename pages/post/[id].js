import { useRouter } from "next/router"
import Image from "next/image"
import { GET_ARTICLE } from '../../graphql/get-articles'
import Query from '../../hooks/useApollo'
import { gql } from "@apollo/client";
import client from '../../lib/apolloClient'
import { Container, Row } from 'react-bootstrap'
import styles from '../../styles/Article.module.scss'

export default function Post({ article }) {
  const { query: { pid } } = useRouter()
  
  return(
    <Query query={GET_ARTICLE}>
      {({data: { article }}) => { 
        <Container className={styles["post-container"]}>
          <Row className={styles["post-wrapper"]}>
            <Image
              src={article.image.url}
              width={500}
              height={500} 
            /> 
            <h2>{article.author}</h2>
            <h2>{article.date}</h2>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
          </Row>
        </Container>
      }}
    </Query>
  )
}
  
export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
    query Article($id: ID!) {
      article($id: ID!) {
        id
        author
        published_at
        title
        body
        image {
          url
        }
      }
    }`,
  }) 



  return {paths, fallback: false }
} 

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
    query Article($id: ID!) {
      article($id: ID!) {
        id
        author
        published_at
        title
        body
        image {
          url
        }
      }
    }
  `,
  });
  console.log("Fetching data")

  return {
    props: {
      articles: data.articles,
    },
  };
}