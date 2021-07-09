import gql from 'graphql-tag'

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