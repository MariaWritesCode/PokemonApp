import React, { useState, useEffect } from "react";

export default function PokeList() {
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=30")
            .then(res => res.json())
            .then(json => setPokemons(json));
    }, []);  //pass an empty array - only on first render as in ComponentDidMount

    return pokemons ? (
        <div>
            {pokemons.results.map((pokemon) => <li key={pokemon.url}>{pokemon.name}</li>)}
        </div>
    ) :
        (
            <div>Loading...</div>
        )
}

