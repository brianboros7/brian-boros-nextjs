import Query from '../../hooks/useApollo'
import styles from '../../styles/Blog.module.scss'
// import Image from "next/image"
import Card  from "react-bootstrap/card"
import { GET_ARTICLES } from '../../graphql/get-articles'
import { gql } from "@apollo/client";
import client from '../../lib/apolloClient'

export default function BlogCard({ articles }) {
    const url = "https://res.cloudinary.com/brian-boros-company/image/upload/"

    return(
        <div>
            <Query query={GET_ARTICLES}>
                {({data: { articles }}) => { 
                    return(
                        <div className={styles["blog-card-container"]}>
                            {articles && articles.map((article) => (
                                <div key={article.id}>
                                    <Card className={styles["blog-card"]}>
                                        {/* <Image
                                            src={article.image[0].url}
                                            aslt="blog card image thumbnail"
                                            width={100}
                                            height={100}
                                            >
                                        </Image> */}
                                        <Card.Body>
                                            <Card.Title>
                                                    {article.title}
                                            </Card.Title>
                                            <Card.Text>
                                                {article.author} 
                                            </Card.Text>
                                            <Card.Text>
                                                {article.date} 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div> 
                            ))}
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

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