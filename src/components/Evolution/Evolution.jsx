import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from "react-router";

import { fetchPokemonEvoliution } from './../../querys/index';
import Loading from './../Loading/Loading';



class Evolution extends React.Component {

    showEvolution = () => {
        const id = this.props.id;
        this.props.history.push(`/pokemon/id/${id}`);
    }

    render() {
        return (
            <Query query={fetchPokemonEvoliution} variables={{param: this.props.id}}>
                {({ loading, error, data }) => {
                    if (loading) return <Loading />;
                    if (error) return <p>Error :(</p>;    
                    const { pokemon } = data;         
                    return (
                        <div className="pokemon-info" onClick={this.showEvolution}>
                            <img className="pokemon-photo" src={pokemon.image} alt="hero2"/>
                            <p className="pokemon-name">{pokemon.name}</p>
                        </div>
                    );
                }}
            </Query>
        )
    }
}


export default withRouter(Evolution);