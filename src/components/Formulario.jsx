import React, {useState} from 'react'


const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    //cuando el user agrega un gasto
    const agregarGasto = e => {
        e.preventDefault()

        //validar

        //construir el gasto

        //construir el gasto al componente principal

        //resetear el form
    }

    return (
        <form 
            onSubmit={agregarGasto}
        >
            <h2>Agregar tus gastos</h2>

            <div className="campo">
                <label>Gasto</label>
                <input 
                    type="text" 
                    className="u-full-width" 
                    placeholder="Ej: Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                    />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                    type="number" 
                    className="u-full-width" 
                    placeholder="Ej: 500"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                    />
            </div>

            <input 
                type="submit" 
                className="button-primary u-full-width" 
                value="Agregar gasto"/>
        </form>
    );
}
 
export default Formulario;