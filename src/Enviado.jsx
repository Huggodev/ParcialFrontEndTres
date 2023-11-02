import React from "react";

const Enviado = ({nombre, fecha}) => {

    return(
        <div className="tarjeta">
            <h3 >Perfecto <span style={{color:'white'}}> {nombre}</span>, si naciste en el año <span style={{color:'white'}}>{fecha}</span></h3>
            <h3>Podemos decir que tienes {2023 - fecha} años!</h3>
        </div>
    )
}

export default Enviado