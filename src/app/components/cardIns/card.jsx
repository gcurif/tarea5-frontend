
import "./styles.css"

const CardIns = ({ title, text, id, respText }) => {
    return <div className="card" style={{ minWidth: 400, maxWidth: 600 }}>
        <span className="icon">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"
                />
                <path
                    d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"
                />
                <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                <path
                    d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"
                />
            </svg>
        </span>
        <h4>{title}</h4>
        <p className="mb-4">
            Este front llama a una api que se conecta a una base de datos mongodb y obtiene
            las preguntas de la tarea y sus respuestas correspondientes.
            <br/>
            <br/>
            Sin embargo las respuestas tienen solo un texto generico que dice
            ("La respuesta esta en el fondo de tu corazón"). 
            <br/>
            <br/>
            1. Realizar las modificaciones necesarias para que en vez de que se muestre el texto
            "La respuesta esta en el fondo de tu corazón" se muestre la respuesta correcta,
            esta respuesta debe ser redactada por ud mismo.

            <br/>
            <br/>
            2. Ademas para cada pregunta se pide un ejemplo en codigo, generar un archivo con el 
            ejemplo en codigo y en el campo del front indicar el nombre del archivo (luego el listado
            de archivos se puede entregar por cualquier medio, un .zip o via git)
            <br/>
            <br/>
            <b>
            Especificaciones:           

            </b>
        </p>
        <ul>
            <li className="text-sm mt-4">Prohibido hablar de webito rey</li>
            <li className="text-sm mt-4">La entrega de esta Tarea se hara mostrando en vivo que modificación
            se hizo y en que parte, aunque se puede convenir cualquier otro método de entrega</li>
            <li className="text-sm mt-4">Esta permitido CUALQUIER MÉTODO para lograr lo pedido
            (que no sea pedirle a alguien mas que lo haga), ya sea modificar el front, modificar la api,
            usar las funciones de la api, modificar la base de datos u otro método.
             </li>
             <li className="text-sm mt-4">Al presionar siguiente se mostrara una primera pregunta de
             ejemplo con sus datos rellenados, las siguientes se deben completar
             </li>             
        </ul>
        <br/>
        <b>
        <p>Cosas que pueden ser utiles (y sirven de pistas):</p></b>
        <ul>
        <li className="text-sm mt-4">NextJs (el front), aveces deja en cache las respuestas que recibe de la api
            asi que si cambian algo en la api o la base de datos y no funciona REINICIEN TODO, tanto back y front, o si no
            va a parecer como que no cambio nada</li>
            <li className="text-sm mt-4">Analizar los mensaje que aprecen en la consola tanto
            de front y back</li>            
            <li className="text-sm mt-4">Tanto en el back como en el front se dejaron prints o mensajes (a partir
            de ahora llamenle "logs") a modo de pista, aparecen como print("algo") en el back
            y como console.log("algo") en el front</li>
            <li className="text-sm mt-4">Repito, esto tiene mas de un método para lograr lo pedido,
            se puede modificar el front, se puede modificar la api,
            se pueden usar las funciones de la api, o se puede modificar la base de datos
             u otro método.
             </li>            
            <li className="text-sm mt-4">Descargar Nosqlbooster e ingresar a la base de datos
             (los datos de conección estan en la api) </li>
            <li className="text-sm mt-4">En la api se puede entrar a http://127.0.0.1:8000/docs y esta ahí
            la documentación automatica, ademas permite interactuar directamente con la api</li>  
            <li className="text-sm mt-4">Se puede usar Postman también para ineractuar con la api</li>                      
        </ul>
    </div>

}

export default CardIns;