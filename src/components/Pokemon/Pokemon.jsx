import React from 'react';
import { withRouter } from "react-router";

import './pokemon.css';

class Pokemon extends React.Component {


    showDetalis = () => {
        const { id } = this.props;
        this.props.history.push(`/pokemon/id/${id}`);
        document.querySelector('.wrap-content').style.display= 'none';
    }

    render() {
        const { image, name } = this.props;
        return (
            <div className="pokemon" onClick={this.showDetalis}>
                <img className="pokemon-photo" src={image} alt="foto"/>
                <p className="pokemon-name">{name}</p>
            </div>
        )
    }
}

export default withRouter(Pokemon);