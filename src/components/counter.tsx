import { createSignal, type Component, type JSX } from "solid-js";

interface Props{
    initValue: number
    children?:JSX.Element;
}


export const Counter: Component<Props> = (props) => {
//el counter es una varibale reactiva que se actualiza cada vez que cambia su valor, se le conoce como señal, esta es reactiva lo que quiere decir que cada vez que cambia su valor se vuelve a renderizar el componente, en este caso el componente counter, y se vuelve a renderizar el valor de la señal, en este caso el valor del contador
    const [ counter, setCounter ] = createSignal(props.initValue);
//no usaremos destructuracion porque solidJS hace que se pierda lla reactividad de la señal. 
//la reactividad es lo que hace que el componente se vuelva a renderizar cada vez que cambia el valor de la señal, en este caso el valor del contador
    return(
        <>
        
             {/* <h1 class="text-5xl">Counter</h1>  */}

             {props.children}
            <h2 class="text-5xl">value: {counter()}</h2>
        <br />

            <button 
                class="bg-blue-500 p-2 mr-2 rounded"
                onClick = {() => setCounter(prev=> ++prev)}
                >
                    Increment
                </button>
            <button 
                class="bg-blue-500 p-2 mr-2 rounded"
                onClick = {() => setCounter(prev=> --prev)}
                >
                    Decrement
                </button>
        
        </>
    )
}