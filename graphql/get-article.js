import { gql } from "apollo-client";

export const GET_ARTICLE = gql`
query SingleArticle($id: ID!) {
  article(id: $id) {
    id 
    author 
    published_at 
    date
    title
    body
    image {
      url
    }
  }
}`