import gql from 'graphql-tag'; 

export const fetchPokemons = gql`
    query pokemons($first: Int!){
        pokemons(first: $first) {
            id
            image
            name
        }
    }
`; 

export const fetchPokemonDetails = gql`
query pokemon($param: String){
    pokemon(id: $param) {
        id
        name
        image
        classification
        resistant
        weaknesses
        weight {
            minimum
            maximum
        }
        height {
            minimum
            maximum
        }
        maxHP
        attacks{
        fast {
            name
            type
            damage
        }
        special {
            name
            type
            damage
        }
            }
        evolutions {
            id
        }
    }
  }
`;

export const fetchPokemonEvoliution = gql`
query pokemon($param: String){
    pokemon(id: $param) {
        id
        image
        name
    }
  }
`;