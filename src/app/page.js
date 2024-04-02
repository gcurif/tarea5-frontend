
import "nes.css/css/nes.min.css";
import Navbar from "./components/navbar";
import Carrousel from "./components/carrousel/carrousel";

export default async function Home() {

  const preguntas = await getData();
  return (
    <main className='main'>
        <div className="flex min-h-screen flex-col items-center justify-top main mt-1">
          <h2 className="text-3xl font-bold mb-4 mt-8">Tarea número 4</h2>
          <Carrousel preguntas={preguntas} selectedRoot={0}></Carrousel>
        </div>
    </main>
  );
}


async function getData() {
  const res = await fetch(`http://127.0.0.1:8000/preguntas`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}