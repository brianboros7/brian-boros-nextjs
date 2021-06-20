import gql from "graphql-tag";

export const GET_ARTICLE = gql`
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
}`