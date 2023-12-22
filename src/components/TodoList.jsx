import { useState } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

/// prop-types di placeholder belum bisa jalan
export default function TodoList(props) {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([
    {id: 1, value: "belajar dasar react"},
    {id: 2, value: "belajar buat komponen"},
    {id: 3, value: "redux"},
  ])

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()
    console.log(input);

    let newTodo = {
      id: new Date(),
      value: input
    }

    setTodos([...todos, newTodo])
    setInput('')
  }

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter(item => item.id !== todo.id);
    setTodos(updatedTodos);
  }
  
  const editTodo = (todo) => {
    const editedValue = prompt('Edit todo:', todo.value);
    if (editedValue !== null) {
      const updatedTodos = todos.map(item =>
        item.id === todo.id ? { ...item, value: editedValue } : item
      );
      setTodos(updatedTodos);
    }
  }

  const [checkedItems, setCheckedItems] = useState({});
  
  const handleCheckboxChange = (itemId) => {
    const updatedCheckedItems = { ...checkedItems };
    updatedCheckedItems[itemId] = !updatedCheckedItems[itemId];
    setCheckedItems(updatedCheckedItems);
  };
  
  
  return (

    <>
    <div>
      <form>
      <input type="text" value={input} onChange={handleInput} className="placeholder-gray-500 p-3 m-2 rounded-lg border-2 border-black bg-white" placeholder = "Tulis disini ya">{props.input}</input>
      <Button buttonText="Simpan" onClick={addTodo}/>
      </form>

      {/* <Form/> */}

      <div className=" flex flex-col items-center justify-items-center border-2 border-gray-300 bg-white">
        
        {todos.map((item) => (
        
          <li className="flex items-center justify-center text-xl font-semibold space-x-4 list-none border-b-2 border-gray-400 py-2 px-4 " key={item.id}>
            <input id="checkbox" type="checkbox" className="w-4 h-4 " checked={checkedItems[item.id] || false} onChange={() => handleCheckboxChange(item.id)}></input>
            <span style={{ textDecoration: checkedItems[item.id] ? 'line-through' : 'none' }}>
              {item.value}
            </span>
            <Button buttonText="Edit" buttonColor="green" onClick={() => editTodo(item)}/>
            <Button buttonText="Delete" buttonColor="red" onClick={() => deleteTodo(item)}/>

          </li>

        ))}
      </div>
    </div>
    </>
  )
}

TodoList.propTypes = {
  input: PropTypes.string.isRequired,
}