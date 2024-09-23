import {useState, useRef, useEffect} from 'react'

// Esto es un tipo que solo se va a usar en este archivo
type TimerArgumentos = {
    mili: number,
    // Segundos al tener un ? es opcional
    segundos?: number,
}

// este componente va a hacer que el timer se vaya incrementando
// cada segundo.
export const Timer = ({ mili }: TimerArgumentos) => {

    const [segundos, setSegundos] = useState(0)
    // Crea una referencia que no importa cuantas veces
    // se recontruya el componente, siempre va a ser el 
    // mismo puntero a memoria.
    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => { 
        ref.current && clearInterval(ref.current);

        ref.current = setInterval( () => setSegundos( s => s + 1 ), mili) }, [mili])

    return (
        <>
            <h4>Timer: <small> {segundos} </small></h4>
        </>
    )
}


