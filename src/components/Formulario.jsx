import React, {useState} from 'react'


const Formulario = () => {
    return (
        <form>
            <h2>Agregar tus gastos</h2>

            <div className="campo">
                <label>Gasto</label>
                <input 
                    type="text" 
                    className="u-full-width" 
                    placeholder="Ej: Transporte"/>
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                    type="number" 
                    className="u-full-width" 
                    placeholder="Ej: 500"/>
            </div>

            <input 
                type="submit" 
                className="button-primary u-full-width" 
                value="Agregar gasto"/>
        </form>
    );
}
 
export default Formulario;