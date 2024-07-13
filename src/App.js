import {useState} from 'react'
import { v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  //Lista colaboradores
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://avatars.githubusercontent.com/u/91544872?v=4",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])

    //Lista de equipos
    const [equipo, actualizarEquipo] = useState ([
      {
        id: uuid(),
        titulo: "Programación",
        colorDestaque: "#57C278",
        colorFondo: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorDestaque: "#82CFFA",
        colorFondo: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorDestaque: "#A6D157",
        colorFondo: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorDestaque: "#E06B69",
        colorFondo: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorDestaque: "#DB6EBF",
        colorFondo: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorDestaque: "#FFBA05",
        colorFondo: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorDestaque: "#FF8A29",
        colorFondo: "#FFEEDF"
      }
    ])

  const cambiarMostrar = ()=> {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colab", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("ACtualizar", color, id);
    const equiposActualizados = equipo.map((equipo) => {
      if(equipo.id === id){
        equipo.colorDestaque = color
      }

      return equipo
    })

    actualizarEquipo(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipo([...equipo, {...nuevoEquipo, id: uuid()}])
  }

  //Likes
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      <Header />
      {
      mostrarFormulario && <Formulario equipo={equipo.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo = {crearEquipo}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipo.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.id}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like = {like}
        />)
      }

      <Footer/>
    </div>
  );
}

export default App;
