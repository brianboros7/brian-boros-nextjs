import { request,  gql } from "graphqul-request";

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
  }
`

request("http://localhost:1337", query)
.then((data) => console.log(data))