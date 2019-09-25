import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import  ApolloClient from 'apollo-boost';


import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

const client = new ApolloClient ({
  uri: "https://graphql-pokemon.now.sh/"
});


class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className = 'page'>
            <div className='page-wrap-header'>
              <Header />
              <Content />
            </div>
              <Route exact  path='/' component={ Main } />
              <Route exact path='/pokemon/id/:id' component={ PokemonDetails } />
              <Footer />  
          </div>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App;