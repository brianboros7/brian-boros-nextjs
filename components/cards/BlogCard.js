import Query from '../../hooks/useApollo'
import styles from '../../styles/Blog.module.scss'
import Image from "next/image"
import Link from 'next/link'
import Card  from "react-bootstrap/card"
import { GET_ARTICLES } from '../../graphql/get-articles'
import { gql } from "@apollo/client";
import client from '../../lib/apolloClient'

export default function BlogCard({ articles }) {

    return(
        <Query query={GET_ARTICLES}>
            {({data: { articles }}) => { 
                return(
                    <div className={styles["blog-card-container"]}>
                        {articles && articles.map((article) => (
                            <Link 
                                href={{ pathname: `/blog/post/[id]`, query: { id: article.id} }}>
                                <a>
                                    <Card key={article.id} className={styles["blog-card"]}>
                                        <Image
                                            src={article.image[0].url}
                                            aslt="blog card image thumbnail"
                                            width={100}
                                            height={100}
                                            >
                                        </Image>
                                        <Card.Body>
                                            <Card.Text>
                                                <div>Title: {article.title}</div> 
                                            </Card.Text>
                                            <Card.Text>
                                                <div>Author: {article.author}</div> 
                                            </Card.Text>
                                            <Card.Text>
                                                <div>Date: {article.date}</div> 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </a>
                            </Link>
                        ))}
                    </div>
                )
            }}
        </Query>
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
    }`,
    });
    console.log("Fetching data")
  
    return {
      props: {
        articles: data.articles,
      },
    };
}