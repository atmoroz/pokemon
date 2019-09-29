import React from 'react';
import { Query } from 'react-apollo';

import Pokemon from '../Pokemon/Pokemon';
import { fetchPokemons } from './../../querys/index';
import Loading from './../Loading/Loading';
import './main.css';



const Main = () => (
    
    <Query query={fetchPokemons} variables={ {first: 6} }>
        {({ loading, error, data, fetchMore }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error :(</p>; 
            return (
                <Pokemon 
                    loadMoreCallBack = {() =>
                        fetchMore({
                            variables: {
                                first: data.pokemons.length + 6
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return Object.assign({}, prev, {
                                pokemons: [ ...fetchMoreResult.pokemons]
                            });
                            }
                        })
                    } 
                    pokemons={data.pokemons}
                />
            )
        }}
    </Query>
)

export default Main;

