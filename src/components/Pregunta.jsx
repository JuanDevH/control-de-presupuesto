import React, { useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {

    // State de la pregunta al usuario
    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    // Función que lee lo que el usuario escribe
    const handleChange = e => {
        setCantidad(
            parseInt( e.target.value, 10 )
        );
    }

    // Submit para definir el presupuesto
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if( cantidad < 1 || isNaN(cantidad) ) {
            setError(true);
            return;
        }

        // Si se pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }

    return (  
        <>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje="El Presupuesto es incorrecto" />  : null}

            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    name="presupuesto"
                    className="u-full-width"
                    placeholder="Ingrese su presupuesto" 
                    onChange={handleChange}
                />

                <input 
                    type="submit" 
                    value="Definir presupuesto"
                    className="button-primary u-full-width" 
                />
            </form>
        </>
    );
}
 
export default Pregunta;