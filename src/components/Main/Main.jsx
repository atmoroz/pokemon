import React from 'react';
import { Query } from 'react-apollo';

import Pokemon from '../Pokemon/Pokemon';
import { fetchPokemons } from './../../querys/index';
import Loading from './../Loading/Loading';
import './main.css';

const Main = () => (
    
    <Query query={fetchPokemons} variables={ {first: 16} }>
        {({ loading, error, data, fetchMore }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error :(</p>; 
            return (
                <section className="main" >    
                    <Pokemon 
                        loadMoreCallBack = {() =>
                            fetchMore({
                                variables: {
                                    first: data.pokemons.length + 6
                                },
                                updateQuery: (prev, { fetchMoreResult }) => {
                                if (!fetchMoreResult) return prev;
                                return Object.assign({}, prev, {
                                    pokemons: [...prev.pokemons, ...fetchMoreResult.pokemons]
                                });
                                }
                            })
                            } 
                        pokemons={data.pokemons}
                    />
                </section>
            )
        }}
    </Query>
)

export default Main;

