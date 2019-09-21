import React from 'react';
import { Query } from 'react-apollo';

import Pokemon from '../Pokemon/Pokemon'; 
import { fetchPokemons } from './../../querys/index';
import Loading from './../Loading/Loading';
import './main.css';

const Main = () => (
    <Query query={fetchPokemons}>
        {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error :(</p>;
            
            return (
                <section className="main">
                    {data.pokemons.map( item => {
                        return (
                            <Pokemon 
                                key={`pokemon-key${item.id}`}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                            />
                        )
                    })}
                </section>
            );
        }}
    </Query>
)

export default Main;