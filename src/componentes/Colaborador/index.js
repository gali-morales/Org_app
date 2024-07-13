import "./Colaborador.css"
import { IoIosCloseCircleOutline, IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Colaborador = (props) => {
    //Destructurar
    const {nombre,puesto,foto,equipo, id, fav} = props.datos
    const {colorDestaque, eliminarColaborador, like} = props
    
    return <div className="colaborador">
        <IoIosCloseCircleOutline className="eliminar" onClick={() => eliminarColaborador(id)}/>

        <div className="encabezado" style={{backgroundColor : colorDestaque}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <IoIosHeart color="#D93866" onClick={() => like(id)}/> : <IoIosHeartEmpty onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador

