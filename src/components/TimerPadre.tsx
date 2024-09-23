import {Timer } from './Timer'
import {useState} from 'react'

export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000);

    return (
        <>
            <span>Milisegundos { milisegundos }</span>
            <br />

            <button className='btn btn-outtline-primary' onClick={() => setMilisegundos(1000)}>
                1000
            </button>

            <button className='btn btn-outtline-primary' onClick={() => setMilisegundos(2000)}>
                2000
            </button>


            <Timer mili={milisegundos}/>
        </>
    )
}

