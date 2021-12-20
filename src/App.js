import React from 'react';
import FetchPokemon from './components/FetchPokemon';
const App = () => {

    return(
        <div className="app-container">
            <h1> Hello World </h1>
            <FetchPokemon />
        </div>
    );
};

export default App;