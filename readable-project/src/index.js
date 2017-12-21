import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'


const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjbf7p2q42pzw0108ty2341ej' })


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


ReactDOM.render(
 <BrowserRouter>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
