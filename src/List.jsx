import Person from './Person'

function List({ persons }) {
  return (
    <section>
      {persons.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  )
}

export default List
