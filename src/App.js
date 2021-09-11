import React, { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
function App() {
  //setup list to store our items
  const [list, setList] = useState([]);
  //store userinput
  const [userInput, setUserInput] = useState('');
  //editing boolean
  const [isEdit, setIsEdit] = useState(false)
  //item to edit
  const [itemToEdit, setItemToEdit] = useState({})


  //on input change
  const inputHandler = (e) => {
    setUserInput(e.target.value);
  }
  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      //find editing item in our list and return a new list with edited item
      const newList = list.map(item => {
        return item.id === itemToEdit.id ? { ...item, body: userInput } : item
      })
      //and set it to state to display
      console.log(newList);
      setList(newList);
      //disable edit state
      setIsEdit(false);
      //clear input
      setUserInput('');

    }
    else {
      //create new post as an object with a unique id and body of userinput
      //!!important to use toString() so we wont get object back as a uniq id
      const newPost = { id: new Date().getTime().toString() + Math.random(), body: userInput }

      //add user input in our list in state
      setList((list) => {
        return [...list, newPost];
      })
      //clear input
      setUserInput('');
    }
  }


  //delete item
  const deleteItem = (e) => {
    //we need to use event.currentTarget because inside button we have icon from 'react-icons' and if we click on icon
    //we will not get id, with currentTarget we will allways get our button with event listener
    const target = e.currentTarget;
    //filter our state list and delete item from there with same id
    const newList = list.filter(item => item.id !== target.id);
    //set updated list
    setList(newList);
  }

  //Edit item
  const editItem = (e) => {
    const target = e.currentTarget;
    setIsEdit(true)
    const editItem = list.filter(item => item.id === target.id);
    //use spread so we wont get array as item
    setItemToEdit(...editItem)
    //set in input edited item body
    setUserInput(editItem[0].body);
  }

  //clear ALL
  const clearList = () => {
    setList([]);
  }

  return (
    <section className='section-center'>
      <form onSubmit={submitHandler} action="" className="post-form">
        <h3>Post here!</h3>
        <div className="form-control">
          <input value={userInput} onChange={inputHandler} type="text" className="post" placeholder='e.g. Bunny' />
          {/* if isEdit is true we display text 'Edit' else 'Submit' */}
          <button type='submit' className='submit-btn'>{isEdit ? 'edit' : 'submit'} </button>
        </div>
      </form>
      <div className="post-container">
        <div className="post-list">
          {/* display list */}
          {list.map((item) => {
            return (
              <article key={item.id} className="post-item">
                <p className="title">{item.body}</p>
                <div className="btn-container">
                  <button onClick={editItem} id={item.id} type='button' className='edit-btn'><AiFillEdit /></button>
                  <button onClick={deleteItem} id={item.id} className="delete-btn" type='button'><FaTrash /></button>
                </div>
              </article>
            )
          })}

          <button onClick={clearList} type='button' className='clear-btn'>clear All</button>
        </div>
      </div>
    </section>
  );
}

export default App;
