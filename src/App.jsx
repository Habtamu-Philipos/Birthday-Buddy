import { useState } from 'react'
import data from './data'
import Person from './Person'
import List from './List'

const App = () => {
  const [persons, setPerson] = useState(data)
  return (
    <main>
      <section className="container">
        <h3> {persons.length} Birthdays Today</h3>
        <List persons={persons} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPerson([])}
        >
          Clear all
        </button>
      </section>
    </main>
  )
}
export default App
