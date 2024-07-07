import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";
import { useSelector } from "react-redux";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {isLoading, pokemons=[], page} = useSelector(state => state.pokemons)
  useEffect(() => {
   dispatch(getPokemons());
  }, [])
  
  return (
    <>
        <h1>Pokemon</h1>
        <hr />
        <span>Loading:{isLoading ? 'True': 'False'}</span>
        <ul>
            {
              pokemons.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
              ))
            }
        </ul>
        <button 
        disabled = {isLoading}
        onClick={()=>dispatch(getPokemons(page)) }>Next</button>
    </>
  )
}
