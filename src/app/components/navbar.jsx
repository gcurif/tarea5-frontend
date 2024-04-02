const Navbar = ({ preguntas }) => {
    console.log('navbar');
    console.log('pregs', preguntas);
    return <div className="menu">
        <div className="label">Menu</div>
        <div className="spacer"></div>
        <div  className="item"><span>Instrucciones</span></div>
        {preguntas.map( (p, index) => {
            return <div key={index} className="item"><span>Pregunta {p.numero}</span></div>
        })}
    </div>
}

export default Navbar;