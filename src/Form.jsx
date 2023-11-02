import React from "react";
import { useState } from "react";
import Enviado from "./Enviado";

const Form = () => {

    const [nombre, setNombre] = useState ('')
    const [fecha, setFecha] = useState ('')
    const [show, setShow] = useState (false)
    const [error, setError] = useState (false)
    const handleSubmit = (event) => {
        event.preventDefault ()
        if (nombre.length > 3 && fecha.length == 4){
            setShow(true)
            setError(false)
        } else { 
            setShow(false)
            setError(true)
        }
    }

    return <div>
        {!show &&
            <form onSubmit={handleSubmit}>

        <input type="text" value={nombre} placeholder='Ingresa tu nombre' onChange={(event) => setNombre(event.target.value.trimStart())}/>
        <br />
        <input type="text" value={fecha} placeholder='ingresa tu año de nacimiento' onChange={(event) => setFecha(event.target.value.trimStart())}/>
        <br />
        <br />
        <button>Enviar</button>

    </form>
    }
        
    {show &&
    <Enviado nombre = {nombre} fecha = {fecha}/>
    }
    {error && <div className="error"> <h3 style={{color: 'red'}}>Por favor chequea que la información sea correcta, gracias </h3>  
    <h4> Recueda que el nombre debe contener mas de 3 caracteres y el año de nacimiento debe tener 4 caracteres, ni mas ni menos!</h4></div>}

  </div>

}

export default Form;