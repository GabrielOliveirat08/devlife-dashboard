import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header'
import TaskCard from "./components/TaskCard";
import './App.css'


const tarefas = [
  {id:1, titulo: "Estudar react",categoria: "SENAI", prioridade: "alta"},
  {id:2, titulo: "viagem",categoria: "SESI", prioridade: "media"},
  {id:3, titulo: "Prova",categoria: "SESI", prioridade: "baixa"},
  {id:4, titulo: "fazer nd ",categoria: "SESI", prioridade: "alta"},
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

        <main className="max-w-4x1 mx-auto px-6 py-10">
          <h2 className="text-xl font-bold text-slate-700 mb-6">
            Minhas tarefas  ({tarefas.lenght})
          </h2>
          
          <section className="grid gap-4 sm:grid-cols-2">
            {tarefas.map((tarefa) => (
              <TaskCard
                key={tarefa.id}
                titulo={tarefa.titulo}
                categoria={tarefa.categoria}
                prioridade={tarefa.prioridade}
              />
            ))}
          </section>
        </main>
      </Header>
    </div>
  )
}

export default App;
