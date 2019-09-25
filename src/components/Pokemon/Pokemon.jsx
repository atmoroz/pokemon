import React from 'react';
import { withRouter } from "react-router";

import './pokemon.css';

class Pokemon extends React.Component {

    handleScroll = ({ currentTarget }, loadMoreCallBack) => {
        if (
          currentTarget.scrollTop + currentTarget.clientHeight >=
          currentTarget.scrollHeight
        ) {
            loadMoreCallBack();
        }
    };

    showDetalis = (id) => {
        this.props.history.push(`/pokemon/id/${id}`);
        document.querySelector('.wrap-content').style.display= 'none';
    }
    
    render() {
        
        const { loadMoreCallBack, pokemons } = this.props;
       
        return (
            pokemons.map((item) => (
                <section className="section" key={item.id} onScroll={e => this.handleScroll(e, loadMoreCallBack)}>
                    <div className="pokemon" id={item.id} key={item.id} onClick={this.showDetalis.bind(this, item.id)}>
                        <img className="pokemon-photo" src={item.image} alt="foto"/>
                        <p className="pokemon-name">{item.name}</p>
                    </div>
                </section>
            ))
        )
    }
}

export default withRouter(Pokemon);