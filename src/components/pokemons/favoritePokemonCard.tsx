import type { FavoritePokemon } from "@interfaces/favorite-pokemons";
import type { Component } from "solid-js";
import {Show, createSignal } from "solid-js";
interface Props{
    pokemon: FavoritePokemon;
}
//Component es propio de solid y es una forma de definir un componente, los <Props> son las propiedades que se le van a pasar al componente
export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {
    const [isVisible, setVisible]= createSignal(true);
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    
    const deleteFavorite=() => {
        //aqui obtenemos el array de favoritos del local storage y luego se parsea de string a objeto
        const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];
//el metodo filter lo que hace es filtrar el array y devolver un nuevo array con los elementos que cumplan la condicion.
//aqui estamos diciendo que el nuevo array contendra todos los elementos menos aquel cuyo id sea igual al id del pokemon que estamos eliminando
        const newFavorites = favorites.filter(p=> p.id !== pokemon.id);

//stringify es una funcion que convierte objeto a string  
        localStorage.setItem("favorites",JSON.stringify(newFavorites));
        setVisible(false);

    }


    return(
//show es propio de solid, es como el ngif de angular, solo cuando es verdadera la condicion, se renderiza el componente
<Show when={isVisible()}>

        <div class=" flex flex-col items-center justify-center ">
            <a href={`/pokemons/${pokemon.name}`}>
                <img 
                    src={imgSrc} 
                    alt={pokemon.name} 
                    width="96" 
                    height="96" 
                    style={`view-transition-name ${pokemon.name}-image`}/>
                <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
            </a>
            <button onClick={deleteFavorite} class="text-red-400">Delete</button>
        </div>
</Show>
    );
}