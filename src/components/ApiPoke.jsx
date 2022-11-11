import { useState, useEffect } from "react"
import axios from "axios"

function ApiPoke(){

  const [ pokemon, setPokemon ] = useState([]);

  

  useEffect(()=>{
    const obtenerPokemon = async ()=>{
      const url = `https://pokeapi.co/api/v2/pokemon`;
      const result = await axios.get(url);

      //console.log(result.data.results);

      setPokemon(result.data.results);
    }
    obtenerPokemon();

  },[])

  console.log(pokemon);

  return(
    <div>
     <h1>Pokemones</h1>

      <ul>
        {pokemon.length === 0 && <p>Cargando...</p>}
        {
          pokemon.map((nombres, i)=>{

            return(
              <li key={i}>
                <h4>Nombre: {nombres.name}</h4>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`}
                  alt={nombres.name}
                />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default ApiPoke;