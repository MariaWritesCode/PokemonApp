import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

export default function PokeList() {
    const [pokemons, setPokemons] = useState();


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=30")
            .then(res => res.json())
            .then(json => setPokemons(json));
    }, []);

    return pokemons ? (
        <Router>
            <div className="outer">

                <div> {pokemons.results.map((pokemon) => <div key={pokemon.url}><Link to={`${pokemon.name}`} className="pokeName">{pokemon.name}</Link></div>)}</div>

                <Switch>
                    <Route path="/:name">
                        <CurrentPokemon />
                    </Route>
                </Switch>
            </div>
        </Router>
    ) : (
            <div>Loading...</div>
        )
}

function CurrentPokemon() {
    let params = useParams();
    const [currentPokemonData, setCurrentPokemonData] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then(res => res.json())
            .then(json => setCurrentPokemonData(json));
    }, [params.name]);

    if (currentPokemonData) {
        let pokemonPictureUrl = currentPokemonData.sprites["front_default"];
        return (
            <div>
                <h3>ID: </h3>
                <div>{currentPokemonData.id}</div>
                <h3>Name</h3>
                <div>{currentPokemonData.name}</div>
                <h3>Base Exp:</h3>
                <div>{currentPokemonData.base_experience}</div>
                <h3>Height:</h3>
                <div>{currentPokemonData.height}</div>
                <h3>Weight:</h3>
                <div>{currentPokemonData.weight}</div>
                <div><img src={pokemonPictureUrl} alt="pokemon"></img></div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

