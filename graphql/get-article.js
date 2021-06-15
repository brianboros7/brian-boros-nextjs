import gql from "graphql-tag";

const GET_ARTICLE = gql`
  query Article($id: ID!) {
    article(id: $id) {
      id
      author
      published_at
      body
      title
      image {
        url
      }
    }
  }
`;

export default ARTICLE_QUERY;