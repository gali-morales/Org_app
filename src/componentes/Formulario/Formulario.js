import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    //Constantes de inputs
    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

        //Destructurar
    const {registrarColaborador, crearEquipo} = props

    //Manejar envio de Formularios
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envío");
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosEnviar)
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorDestaque: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para añadir al colaborador </h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required
            valor={nombre}
            actualizarValor={actualizarNombre}
            />
            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={puesto}
            actualizarValor={actualizarPuesto}
            />
            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones valor={equipo}
            actualizarEquipo={actualizarEquipo} equipo={props.equipo}/>
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para añadir un equipo </h2>
            <Campo 
            titulo="Título" 
            placeholder="Ingresar título" 
            required
            valor={titulo}
            actualizarValor={actualizarTitulo}
            />
            <Campo 
            titulo="Color" 
            placeholder="Ingresar color en Hex" 
            required
            valor={color}
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton>Registrar equipo</Boton>
        </form>
    </section> 
}

export default Formulario