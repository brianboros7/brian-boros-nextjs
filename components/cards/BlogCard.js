import Query from '../../hooks/useApollo'
import Image from "next/image"
import Card  from "react-bootstrap/card"
import { GET_ARTICLES } from '../../graphql/get-articles'
import { gql } from "@apollo/client";
import client from '../../lib/apolloClient'

export default function BlogCard({ articles }) {

    return(
        <div>
            <Query query={GET_ARTICLES}>
                {({data: { articles }}) => { 
                    return(
                        <div>
                            {articles && articles.map((article) => (
                                <div key={article.id}>
                                    <Card>
                                        <Image
                                            src={article.image[0].url}
                                            aslt="blog card image thumbnail"
                                            width={100}
                                            height={100}
                                            >
                                        </Image>
                                        <Card.Body>
                                            <Card.Title>
                                                    {article.title}
                                            </Card.Title>
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