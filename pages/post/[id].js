import { useRouter } from "next/router"
import Image from "next/image"
import { GET_ARTICLES } from '../../graphql/get-articles'
import { gql } from "@apollo/client";
import client from '../../lib/apolloClient'
import { Container, Row } from 'react-bootstrap'

const Post = ({ articles }) => {
  const router = useRouter()
  const { pid } = router.query 
  
  return(
    <Query query={GET_ARTICLES}>
      {({data: { articles }}) => {
        return(
          <Container className={styles["post-container"]}>
            <Row className={styles["post-wrapper"]}>
              <Image
                src={articles.image.url}
                width={500}
                height={500} 
              /> 
              <h2>{article.author}</h2>
              <h2>{article.date}</h2>
              <h1>{article.title}</h1>
              <div>{article.body}</div>
            </Row>
          </Container>
        )
      }}
    </Query>
  )
}
  
export default Post 


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query Articles {
      articles {
        id
        author
        title
        date
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