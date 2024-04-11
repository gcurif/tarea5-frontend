
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
        <h4>Instrucci&#65533;nes</h4>

        <p className="mb-4">
            Este front llama a una api que se conecta a una base de datos mongodb y obtiene
            las preguntas de la tarea y sus respuestas corresponien𒀱𒀲𒀳𒀴𒀵𒀶𒀷𒀸𒀹𒀺𒀻𒀼𒀽𒀾𒀿𒁀𒁁𒁂𒁃𒁄𒁅𒁆𒁇𒁈𒁉𒁊𒁋𒁌𒁍𒁎𒁏
            𒁐𒁑𒁒𒁓𒁔𒁕𒁖𒁗𒁘𒁙𒁚𒁛𒁜𒁝𒁞𒁟𒁠𒁡𒁢𒁣𒁤𒁥𒁦𒁧𒁨𒁩𒁪𒁫𒁬𒁭𒁮𒁯𒁰𒁱𒁲𒁳𒁴𒁵𒁶𒁷𒁸𒁹𒁺𒁻𒁼𒁽𒁾𒁿𒂀𒂁𒂂𒂃𒂄𒂅𒂆𒂇𒂈𒂉𒂊𒂋𒂌𒂍𒂎𒂏𒂐𒂑𒂒𒂓𒂔𒂕𒂖𒂗𒂘𒂙𒂚𒂛𒂜𒂝𒂞𒂟𒂠𒂡𒂢𒂣𒂤𒂥𒂦𒂧𒂨𒂩𒂪𒂫𒂬𒂭𒂮𒂯𒂰𒂱𒂲𒂳𒂴𒂵𒂶𒂷𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀𒃁𒃂𒃃𒃄𒃅𒃆𒃇𒃈𒃉𒃊𒃋𒃌𒃍𒃎𒃏𒃐𒃑𒃒𒃓𒃔𒃕𒃖𒃗𒃘𒃙𒃚𒃛𒃜𒃝𒃞𒃟𒃠𒃡𒃢𒃣𒃤𒃥𒃦𒃧𒃨𒃩𒃪𒃫𒃬𒃭𒃮𒃯𒃰𒃱𒃲𒃳𒃴𒃵𒃶𒃷𒃸𒃹𒃺𒃻𒃼𒃽𒃾𒃿𒄀𒄁𒄂𒄃𒄄𒄅𒄆𒄇𒄈𒄉𒄊𒄋𒄌𒄍𒄎𒄏𒄐𒄑


            <br />
            <br />
            Sin embar𒀲𒀳𒀴sad las respuestas tienen sol𒀲𒀳𒀴 un texto generico que dice
            ("La respuesta esta en el fondo de tu co𒀲𒀳𒀴
            <br />
            LaƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗ
            ǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝ
            <br />
            1. Realizar las modificaciones necesarias para que en vez de que se muestre el texto
            "La respuesta esta en el fondo de tu corazón" se muestre la respuesta correcta,
            esta respuesta debe ser redactada por ud mismo.

            <br />
            <br />
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            Sección 1.10.32 de "de Finibus Bonorum et Malorum", escrito por Cicero en el 45 antes de Cristo
            "Sed ut perspiciatis unde omnis iste nat
            <br />
            <br />
            <b>
                Especificaciones:

            </b>
        </p>
        <h4>Todos estos textos no son una pista, es solo mucho texto para que se note que cambio la pagina ajjajajaj</h4>

        <ul>
            <li className="text-sm mt-4">Prohibido hablar de webito rey</li>
            <li className="text-sm mt-4">LaƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘ
                ǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝ

            </li>
            <li className="text-sm mt-4"><del> Esta p̷e̴r̵m̶i̸t̵i̷d̴o̶ C̶U̸A̴L̴Q̸U̷I̴E̴R̵ MÉTODO para lograr lo pedido
                (que no sea p̷e̸d̵i̵r̷l̵e̴ a̷ ̴a̸l̵g̵u̷i̸e̴n̴ ̵m̵a̴s̴ que lo haga), ya sea modificar el f̵r̶o̸n̸t̶, modificar la a̸p̸i̷,
                usar las funciones de la a̸p̶i̶, modificar la base de datos u otro método.</del>
            </li>
            <li className="text-sm mt-4">Al p̸r̵e̷s̷i̴o̴n̶a̶r̸ s̶i̸g̵u̵i̷e̷n̴t̸e̴ se mostrara una primera pregunta de
                ejemplo con sus datos r̵e̵l̸l̴e̷n̴a̷d̵o̴s̵, las siguientes se deben completar
            </li>

        </ul>
        <br />
        <b>
            <p>Cosas que pueden ser utiles (y sirven de pistas):</p></b>
            <h4>La info de aca sigue siendo util para las tareas que vienen</h4>

        <ul>
            <li className="text-sm mt-4">NextJs (el front), aveces deja en cache las respuestas que recibe de la api
                asi que si cambian algo en la api o la base de datos y no funciona REINICIEN TODO, tanto back y front, o si no
                va a parecer como que no cambio nada</li>
            <li className="text-sm mt-4">Analizar los mensaje que aprecen en la consola tanto
                de front y back</li>
            <li className="text-sm mt-4">Tanto en el back como en el front se dejaron prints o mensajes (a partir
                de ahora llamenle "logs") a modo de pista, aparecen como print("algo") en el back
                y como console.log("algo") en el front</li>
            <li className="text-sm mt-4"> <del>Repito, esto tiene mas de un método para lograr lo pedido,
                se puede modificar el front, se puede modificar la api,
                se pueden usar las funciones de la api, o se puede modificar la base de datos
                u otro método.</del>
                modificar el back o front y esta vez comitear
            </li>
            <li className="text-sm mt-4"><del> Descargar Nosqlbooster e ingresar a la base de datos
                (los datos de conección estan en la api)</del> </li>
            <li className="text-sm mt-4">En la api se puede entrar a http://127.0.0.1:8000/docs y esta ahí
                la documentación automatica, ademas permite interactuar directamente con la api</li>
            <li className="text-sm mt-4">Se puede usar Postman también para ineractuar con la api</li>
            LaƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹ
            ǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝ
            LaƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊ
            ȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝ
        </ul>
    </div>

}

export default CardIns;