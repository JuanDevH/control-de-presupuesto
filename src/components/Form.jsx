import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({setGasto, setCrearGasto}) => {

    const [ nombre, setNombre ] = useState('');
    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        // Validar formulario
        if(cantidad < 1 || isNaN(cantidad || nombre.trim() === '' )) {
            setError(true);
            return;
        }setError(false);

        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        };

        // Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        // Resetear el Formulario
        setNombre('');
        setCantidad(0);

    }


    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}

            <div className="campo">
                <label htmlFor="">Nombre del gasto</label>

                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="">Cantidad del gasto</label>

                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad( parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit" 
                value="Agregar Gasto" 
                className="u-full-width button-primary"
            />
        </form>
    );
}
 
export default Form;