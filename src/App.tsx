import { useState } from "react"
import "./App.css"

type ItemId = `${string}-${string}-${string}-${string}-${string}`
interface Item {
  id: ItemId
  timestamp: number
  text: string
}

// const INITIAL_ITEMS = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Video juegos",
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Libros",
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Series",
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Películas",
//   },
// ]

function App() {
  const [items, setItems] = useState<Item[]>([])

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

  const handleRemoveItem = (id: ItemId) => () => {
    setItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id !== id)
    })
  }

  return (
    <>
      <main>
        <aside>
          <h1>Prueba técnica de React</h1>
          <h2>Añadir y eliminar elementos de una lista</h2>
          <form
            onSubmit={handleSubmit}
            aria-label="Añadir elementos a la lista"
          >
            <label>
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
          {items.length === 0 ? (
            <strong>No hay elementos en la lista</strong>
          ) : (
            <ul>
              {items.map((item) => {
                return (
                  <li key={item.id}>
                    {item.text}
                    <button onClick={handleRemoveItem(item.id)}>Delete</button>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </main>
    </>
  )
}

export default App
