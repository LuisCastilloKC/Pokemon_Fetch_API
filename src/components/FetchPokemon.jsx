import React, { useState, useEffect } from 'react';
import axios from 'axios'

const FetchPokemon = () => {
    const [pokemons, setPokemon] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        })
    })

    return (
        <div>
            <ul>
                {
                    pokemons.map(pokemon => <li key={pokemon.game_index}>{pokemon.name}</li>)
                }
            </ul>
        </div>
    );
};

export default FetchPokemon;