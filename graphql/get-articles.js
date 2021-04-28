import gql from 'graphql-tag'

export const GET_ARTICLES = gql`
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
`