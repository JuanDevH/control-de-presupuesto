import React, { useState } from 'react';

const Formulario = () => {
	return (
		<form>
			<h2>Agrega tus gastos aquí</h2>

			<div className="campo">
				<label htmlFor="nombre">Nombre del Gasto</label>
				<input 
					type="text"
					name="nombre"
					className="u-full-width"
					placeholder="Ej. Trasnporte"
				/>

				<label htmlFor="cantidad">Cantidad del Gasto</label>
				<input 
					type="number"
					name="cantidad"
					className="u-full-width"
					placeholder="Ej. 500"
				/>

				<input 
					type="submit"
					className="button-primary u-full-width"
					value="Agregar Gasto"
				/>

			</div>
		</form>
	)
}
export default Formulario;