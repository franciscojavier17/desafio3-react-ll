import "../assets/css/pokemones.css";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";


const Pokemons = () => {
    const [data, setData] = useState([]);
    const [pokemons, setPokemon] = useState('');
    const navigate = useNavigate ();

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            setData(response.data)
        })
        .catch(error=>{
            console.log(error)
        });
    },[pokemons])
            
    const handlePokemons = (event) =>{
        setPokemon(event.target.value)
    }

        
    const irAPokemons = () => {
        navigate(`/CardPokemons/${pokemons}`);
    };

    return ( 
        <>
            <div className="container">     
                <div className="title">
                    <h1>Selecciona un Pokémon</h1>  
                </div>
                
                <select name="select-pokemon-section" className="listpokemon" onChange={handlePokemons}  >
                    <option className="selection">Seleccione un Pokémon aquí:</option>
                    {data.results && data.results.map(pokemon => (
                        <option key={pokemon.name} value={pokemon.name}>
                            {pokemon.name}
                        </option>
                    ))}
                </select>
                <div className="button1">
                    <button className='nes-btn is-success' id='button' onClick={irAPokemons}>Ver Detalles</button>
                </div>
            </div>
        </>
    );
}

export default Pokemons;