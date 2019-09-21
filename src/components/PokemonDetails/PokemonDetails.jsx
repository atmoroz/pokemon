import React from 'react';
import { withRouter } from "react-router";
import { Query } from 'react-apollo';

import { fetchPokemonDetails } from './../../querys/index';
import Evolution from '../Evolution/Evolution';
import Loading from './../Loading/Loading';
import './pokemonDetails.css';


const PokemonDetails = (props) => (
<Query query={fetchPokemonDetails} variables={{param: props.match.params.id}}>
        {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error :(</p>;
            const { pokemon } = data;
            return (
                <div className="pokemon-details">
                <div className="details-header">
                    <div className="pokemon-details-name-wrap">
                        <h2 className="pokemon-details-name">{pokemon.name}</h2>
                        <p className="classification">{pokemon.classification}</p>
                    </div>
                    <div className="feature">
                        <div className="resistant-wrap">
                            { pokemon.resistant.map((item,i) => <span className="resistant" key={i}>{item}</span>)}
                        </div>
                        <div className="weaknesses-wrap">
                            { pokemon.weaknesses.map((item,i) => <span className="weaknesses" key={i}>{item}</span>)} 
                        </div>
                    </div>
                </div>

                <div className="pokemon-details-info">
                        <img className="pokemon-details-photo" src={pokemon.image} alt="foto"/>
                    <div className="pokemon-details-allInfo">
                        <div className="physical-characteristics">
                            <p><span className="characteristics-wrap">Weight</span> <span className="Weight-min characteristics-values">{pokemon.weight.minimum} </span>&ensp; - &ensp;<span className="Weight-max characteristics-values">{pokemon.weight.maximum}</span></p>
                            <p><span className="characteristics-wrap">Height</span> <span className="Height-min characteristics-values">{pokemon.height.minimum} </span>&ensp; - &ensp;<span className="Height-max characteristics-values">{pokemon.height.minimum}</span></p>
                            <p><span className="characteristics-wrap">Max HP</span> <span className="characteristics-values">{pokemon.maxHP}</span></p>
                        </div>

                        <div className="allAttacks">
                            <div className="fastAttacks">
                                <h3>Fast Attacks</h3>
                                <ul className="attacks-list">
                                    {pokemon.attacks.fast.map((item,i) => {
                                        return (
                                            <li key={`fastAttacks-${i}`}> 
                                                <div>
                                                    {item.name}
                                                    <span className="caption">{item.damage}</span>
                                                </div>
                                                <p>{item.type}</p> 
                                             </li> 
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="specialAttacks">
                                <h3>Special Attacks</h3>
                                <ul className="attacks-list">
                                    {pokemon.attacks.special.map((item,i) => {
                                        return (
                                            <li key={`attacks-${i}`}> 
                                                <div>
                                                    {item.name}
                                                    <span className="caption">{item.damage}</span>
                                                </div>
                                                <p>{item.type}</p> 
                                             </li> 
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="evolution">
                            { pokemon.evolutions && <h3>Evolution</h3>}
                            <div className="evolution-img-wrap">
                                {pokemon.evolutions && pokemon.evolutions.map(item => {
                                    return (
                                        <Evolution 
                                            key={`evolutionKey-${item.id}`}
                                            id={item.id} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
            );
        }}
    </Query>
)

export default withRouter(PokemonDetails);