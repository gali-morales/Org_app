import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(https://github.com/alura-es-cursos/1950-react-desarrollando-con-js/blob/clase07/public/img/footer.png?raw=true)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="https://github.com/alura-es-cursos/1950-react-desarrollando-con-js/blob/clase07/public/img/facebook.png?raw=true" alt='Facebook' />
            </a>
            
            <a href='https://www.instagram.com/galy_mor/?next=%2F'>
                <img src="https://github.com/alura-es-cursos/1950-react-desarrollando-con-js/blob/clase07/public/img/instagram.png?raw=true" alt='instagram' />
            </a>
        </div>
        <img src='https://github.com/alura-es-cursos/1950-react-desarrollando-con-js/blob/clase07/public/img/Logo.png?raw=true' alt='org' />
        <strong>Desarrollado por Galilea Morales C.</strong>
    </footer>
}

export default Footer