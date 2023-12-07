import "./App.css"

function App() {
  return (
    <>
      <main>
        <aside>
          <h1>Prueba técnica de React</h1>
          <h2>Añadir y eliminar elementos de una lista</h2>
          <form action="">
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
            <li>Video juegos</li>
            <li>Libros</li>
            <li>Series</li>
            <li>Peliculas</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
