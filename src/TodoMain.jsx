import { useState } from 'react'
import './App.css'

import ItemsList from './ItemsList'
import AddTodo from './AddTodo'
import { practice, asyncPractice } from './utils'


function TodoMain() {

  practice()
  asyncPractice()
  const [count, setCount] = useState(0)

  const [items, setItems] = useState([
    { id: 1, name: 'Õun', idDone: false, unit:'kg' },
    { id: 2, name: 'Banaan', idDone: false, unit:'kg' },
    { id: 3, name: 'Pirn', idDone: false, unit:'tk' },
    { id: 4, name: 'Merevaik', idDone: false, unit:'tk' },
    { id: 5, name: 'Kohv', idDone: false, unit:'tk' },
    { id: 6, name: 'Tee', idDone: false, unit:'tk' },
    { id: 7, name: 'Suhkur', idDone: false, unit:'tk' },
    { id: 8, name: 'Jahu', idDone: false, unit:'tk' },
    { id: 9, name: 'Sool', idDone: false, unit:'tk' },
    { id: 10, name: 'Pasta',idDone: false, unit:'tk' }
 
  ])

  const toggleDone = (id) => {
    const newItems = items.map((item) =>{
      if (item.id === id){
        return {...item, isDone: !item.isDone}
      }
      return item
    })
    setItems(newItems)
  }

  const addNewTodo = (newTodo) => {
    console.log(newTodo)
    const newItem = {
      id: items.length + 1,
      name: newTodo.name,
      idDone: false,
      unit: newTodo.unit
    }
    setItems([...items, newItem])
  }

  const deleteItem = (id) => {
    console.log(id)
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  return (
    
    <div className='conteiner'>
    <h1>Minu ostukorv</h1>
    <AddTodo addNewTodo={addNewTodo}/>
    <ItemsList items={items} toggleDone={toggleDone} deleteItem={deleteItem}/>
    </div>
    
  )
}

export default TodoMain
