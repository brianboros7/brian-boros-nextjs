import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import client from '../lib/apolloClient'
import {ApolloProvider} from "@apollo/client"

function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
