import { useState } from "react"
import "./App.css"

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`
  timestamp: number
  text: string
}

const INITIAL_ITEMS = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Video juegos",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Libros",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Series",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Películas",
  },
]

function App() {
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget

    //estrategia 1, no recomendada (trampa de typescript)
    //const input = elements.namedItem("item") as HTMLInputElement

    // estrategia 2, asegurarse que realmente es lo que es
    const input = elements.namedItem("item")
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    const newItem = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now(),
    }
    setItems((previous) => {
      return [...previous, newItem]
    })
    input.value = ""
  }

  return (
    <>
      <main>
        <aside>
          <h1>Prueba técnica de React</h1>
          <h2>Añadir y eliminar elementos de una lista</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">
              Elemento a introducir
              <input
                type="text"
                name="item"
                required
                placeholder="Video juegos"
              />
            </label>
            <button>Añadir elemento a la lista</button>
          </form>
        </aside>
        <section>
          <h2>Lista de elementos</h2>
          <ul>
            {items.map((item) => {
              return <li key={item.id}>{item.text}</li>
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
