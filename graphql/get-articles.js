import { request, gql } from 'graphql-request'

export const GET_ARTICLES = gql`
    query Articles { 
        articles {
            id
            image {
                url
            }
            author 
            title 
            publsihed_at
            date
            body
        }
    }
`

request("http://localhost:1337", query)
.then((data) => console.log(data))