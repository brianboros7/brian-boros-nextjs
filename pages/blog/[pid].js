import { useRouter } from "next/router"
import Image from "next/image"
import { GET_ARTICLE } from '../../graphql/get-article'
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
            <h4>{article.author}</h4>
            <h4>{article.published_at}</h4>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
          </Row>
        </Container>
      }}
    </Query>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query SingleArticle($id: ID!) {
      article(id: $id) {
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
  }
  );
  console.log(query)

  return {
    props: {
      article: data.article,
    },
  };
}


export async function getStaticPaths({ params }) {
  const { data } = await client.query({
    query: gql`
    query SingleArticle($id: ID!) {
      article(id: $id) {
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
  console.log(params)


  const paths = article.map((post) ({
    params: { id: post.id },
  }))
  console.log(params)


  return {paths, fallback: false }
} 