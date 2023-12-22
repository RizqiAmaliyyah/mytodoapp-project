// import PropTypes from 'prop-types'
// import Button from './Button'
// import { useState } from 'react'


// export default function Form(props) {

//   const [input, setInput] = useState('')
//   const [todos, setTodos] = useState([
//     {id: 1, value: "belajar dasar react"},
//     {id: 2, value: "belajar buat komponen"},
//     {id: 3, value: "redux"},
//   ])

//   const handleInput = (event) => {
//     setInput(event.target.value)
//   }

//   const addTodo = (event) => {
//     event.preventDefault()
//     console.log(input);

//     let newTodo = {
//       id: new Date(),
//       value: input
//     }

//     setTodos([...todos, newTodo])
//     setInput('')
//   }

//   const deleteTodo = (todo) => {
//     const updatedTodos = todos.filter(item => item.id !== todo.id);
//     setTodos(updatedTodos);
//   }
  
//   const editTodo = (todo) => {
//     const editedValue = prompt('Edit todo:', todo.value);
//     if (editedValue !== null) {
//       const updatedTodos = todos.map(item =>
//         item.id === todo.id ? { ...item, value: editedValue } : item
//       );
//       setTodos(updatedTodos);
//     }
//   }

//   const [checkedItems, setCheckedItems] = useState({});
  
//   const handleCheckboxChange = (itemId) => {
//     const updatedCheckedItems = { ...checkedItems };
//     updatedCheckedItems[itemId] = !updatedCheckedItems[itemId];
//     setCheckedItems(updatedCheckedItems);
//   };
  

//   return (
//     <form>
//       <input type="text" value={input} onChange={handleInput} className="placeholder-gray-500 p-3 m-2 rounded-lg border-2 border-black bg-white" placeholder = "Tulis disini ya">{props.placeholder}</input>
//       <Button buttonText="Simpan" onClick={addTodo}/>
//     </form>
//   )
// }

// Form.propTypes = {
//   placeholder: PropTypes.string 
// }