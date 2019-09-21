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

                        <div className="allAttacs">
                            <div className="fastAtacs">
                                <h3>Fast Attacs</h3>
                                <ul className="attacs-list">
                                    {pokemon.attacks.fast.map((item,i) => {
                                        return (
                                            <li key={`fastAtacs-${i}`}> 
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
                            <div className="specialAttacs">
                                <h3>Special Attacks</h3>
                                <ul className="attacs-list">
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



// class PokemonDetails extends React.Component {

//     showDetalis = () => {
//         const { id } = this.id;
//         this.props.history.push(`/pokemon/id/${id}`);
//         document.querySelector('.wrap-content').style.display= 'none';
//     }
//     render() {
//         return (
            // <div className="pokemon-details">
            //     <div className="details-header">
            //         <div className="pokemon-details-name-wrap">
            //             <h2 className="pokemon-details-name">Bulbasaur</h2>
            //             <p className="classification">speed pokemon</p>
            //         </div>
            //         <div className="feature">
            //             <div className="resistant-wrap">
            //                 <span className="resistant">Water</span>
            //                 <span className="resistant">Electric</span>
            //                 <span className="resistant">Grass</span>
            //                 <span className="resistant">Fightin</span> 
            //                 <span className="resistant">Fairy</span> 
            //             </div>
            //             <div className="weaknesses-wrap">
            //                 <span className="weaknesses">Fire</span>
            //                 <span className="weaknesses">Ice</span>
            //                 <span className="weaknesses">Flyning</span>
            //                 <span className="weaknesses">Psychick</span>  
            //             </div>
            //         </div>
            //     </div>

            //     <div className="pokemon-details-info">
            //             <img className="pokemon-details-photo" src="../image/hero.jpg" alt="foto"/>
            //         <div className="pokemon-details-allInfo">
            //             <div className="physical-characteristics">
            //                 <p><span className="characteristics-wrap">Weight</span> <span className="Weight-min characteristics-values">6.04kg </span>&ensp; - &ensp;<span className="Weight-max characteristics-values"> 7.76kg</span></p>
            //                 <p><span className="characteristics-wrap">Height</span> <span className="Height-min characteristics-values" values>0.61m </span>&ensp; - &ensp;<span className="Height-max characteristics-values"> 0.69m</span></p>
            //                 <p><span className="characteristics-wrap">Max HP</span> <span className="characteristics-values" values>1071</span></p>
            //             </div>

            //             <div className="allAttacs">
            //                 <div className="fastAtacs">
            //                     <h3>Fast Attacs</h3>
            //                     <ul className="attacs-list">
            //                         <li>
            //                             <div>Power Whip <span className="caption">70</span></div>
            //                             <p>Grass</p>    
            //                         </li>
            //                         <li>
            //                             <div>Seed Bomb <span className="caption">40</span></div>
            //                             <p>Grass</p> 
            //                         </li>
            //                         <li>
            //                             <div>Sludge Bomb <span className="caption">55</span></div>
            //                             <p>Grass</p> 
            //                         </li>
            //                     </ul>
            //                 </div>
            //                 <div className="specialAttacs">
            //                     <h3>Special Attacs</h3>
            //                     <ul className="attacs-list">
            //                         <li>
            //                             <div>Tackle <span className="caption">12</span></div>
            //                             <p>Normal</p>    
            //                         </li>
            //                         <li>
            //                             <div>Vine Whip <span className="caption">7</span></div>
            //                             <p>Grass</p> 
            //                         </li>
            //                     </ul>
            //                 </div>
            //             </div>

            //             <div className="evolution">
            //                 <h3>Evolution</h3>
            //                 <div className="evolution-img-wrap">
            //                     <div className="pokemon-info" onClick={this.showDetalis}>
            //                         <img className="pokemon-photo" src="../image/hero2.jpg" alt="hero2"/>
            //                         <p className="pokemon-name">Bulbasavr</p>
            //                     </div>
            //                     <div className="pokemon-info">
            //                         <img className="pokemon-photo" src="../image/hero3.jpg" alt="hero3" />  
            //                         <p className="pokemon-name">Bulbasavr</p>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>         
            // </div>
//         )
//     }
// }

export default withRouter(PokemonDetails);