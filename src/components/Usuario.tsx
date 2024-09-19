import { useState } from "react";

// Interfaces = Son reglas que le podemos poner a los objetos.
interface User {
    uid: string;
    name: string;
}

//Asignarle un tipo de objeto a una variable
const tempUser: User = {
    uid:'XDZ233',
    name: 'Fernando Herrera'
}

export const Usuario = () => {
    // Aqui le especificamos al useState que tipo de 
    // dato queremos asignarle
    const [user, setUser] = useState<User>(tempUser);

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Marcelo Marochi'
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>

            <button onClick={login} className="btn btn-outline-primary">
                Login
            </button>

            {
                (!user)
                    ? <pre> No hay un usuario </pre>
                    : <pre>{JSON.stringify( user )} </pre>
            }

            
        </div>
    )
}

