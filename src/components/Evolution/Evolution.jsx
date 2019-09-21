import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from "react-router";

import { fetchPokemonEvoliution } from './../../querys/index';
import Loading from './../Loading/Loading';

// const showEvolution = () => {
//     console.log(this)
//     const { id } = this.props;
//     props.history.push(`/pokemon/id/${id}`);
// }

const Evolution = (props) => (
    <Query query={fetchPokemonEvoliution} variables={{param: props.id}}>
        {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error :(</p>;    
            const { pokemon } = data;         
            return (
                <div className="pokemon-info" onClick={() => {
                    const { id } = props;
                    props.history.push(`/pokemon/id/${id}`);
                }}>
                    <img className="pokemon-photo" src={pokemon.image} alt="hero2"/>
                    <p className="pokemon-name">{pokemon.name}</p>
                </div>
            );
        }}
    </Query>
    )

export default withRouter(Evolution);