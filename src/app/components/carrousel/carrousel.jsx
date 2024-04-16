'use client'
import { useState } from "react";
import Card from "../card/card";
import CardIns from "../cardIns/card";

const Carrousel = ({ preguntas, selectedRoot }) => {

    const [selected, setSelected] = useState(selectedRoot ?? 0);
    return <>
        {selected === 0 ?
            <CardIns title={'instrucciones pichula pene vagina'} /> :
            <Card pregunta={preguntas[selected - 1]}></Card>
        }
        <div className='flex mt-6'>
            {selected >0 ? <button onClick={() => setSelected(selected - 1)}>Anterior</button> : null}
            {selected <= preguntas.length - 1 ? <button className='ml-2' onClick={() => setSelected(selected + 1)}>Siguiente</button> : null}
        </div>
    </>
}

export default Carrousel;