
import "nes.css/css/nes.min.css";
import Carrousel from "./components/carrousel/carrousel";

export default async function Home() {

  // PISTA: AQUI SE LLAMA A LA FUNCIÓN QUE LLAMA A LA API
  const preguntas = await getData();
  console.log('preguntas', preguntas);

  // PISTA MODIFICANDO FRONT
  console.log('Hola, soy la pregunta 0 y me van a modificar :D', preguntas[0]);
  preguntas[0].pistaFront = "aqui agregue algo, también lo pude modificar"
  console.log('Modificado :D', preguntas[0]);

  // PISTA FRONT
  console.log('Ahora vamos a modificar la respuesta de la pregunta 0 :D', preguntas[0]);
  preguntas[0].respuesta.texto = preguntas[0].respuesta.texto + " (aki viene una pista del front)"

  return (
    <main className='main'>
        <div className="flex min-h-screen flex-col items-center justify-top main mt-1 mb-10">
          <h2 className="text-3xl font-bold mb-4 mt-8">Tarea número ????</h2>
          <Carrousel preguntas={preguntas} selectedRoot={0}></Carrousel>
        </div>
    </main>
  );
}

async function getData() {
  // PISTA: AQUI SE LLAMA A LA API
  const res = await fetch(`http://127.0.0.1:8000/preguntas`,  { next: { revalidate: 5 } });
  console.log('resp', res);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}