import Header from '../header/Header'
import { GET_ARTICLES } from '../../graphql/get-articles'

function Article({ title, author, date, body }) {
    return(
        <Query query={GET_ARTICLES}>
            {({data: { articles }}) => {
                return(
                    <div>
                        {ARTICLES}
                    </div>
                )
            }
            

        </Query>
    )
}

export default Article 

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query Articles {
        articles {
            id
            author
            title
            date
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