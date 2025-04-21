import type { FavoritePokemon } from "@interfaces/favorite-pokemons";
import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./favoritePokemonCard";

const getLocalStorage = ():FavoritePokemon[] =>{
    const favoritePokemons = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    )
    return favoritePokemons;
}

export const FavoritePokemons = () => {
    //una señal es una forma de almacenar un valor y reactivamente actualizarlo
    //la reavtividad es poder actializar el dom cuando el valor de la variable cambia sin la neesidad de tocar el dom
    //pokemons es la funcion que se va a usar para actualizar el valor de la señal y setpokemons es la funcion que se va a usar para obtener el valor de la señal
    const [pokemons, setPokemons] = createSignal(getLocalStorage())
    return(
        <div class="grid grid-cols-2 sm:grid-cols-4">
            
<For each = { pokemons()}>
    {(pokemon)=>
    <FavoritePokemonCard pokemon= {pokemon} />
    }
</For>
{/* el for es un componente de solid que itera sobre un array y renderiza un elemento por cada uno de los elementos del array, en este caso el array es pokemons, pokemon es cada elemento del array, en este caso objetos */}
        </div>
    )
}