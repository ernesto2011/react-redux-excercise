import { pokemonApi } from "../../../api/pokemonAPI";
import { setPokemons, startLoading } from "./pokemonSlice"

export const getPokemons = (page = 0) =>{
    return async(dispatch, getState) =>{
        dispatch( startLoading() );

        // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await res.json();
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
    
        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    }
}