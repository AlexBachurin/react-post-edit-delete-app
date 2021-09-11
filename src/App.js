import React, { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
function App() {
  //setup list to store our items
  const [list, setList] = useState([]);
  //store userinput
  const [userInput, setuserInput] = useState('');


  //on input change
  const inputHandler = (e) => {
    setuserInput(e.target.value);
  }
  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    //create new post as an object with a unique id and body of userinput
    //!!important to use toString() so we wont get object back as a uniq id
    const newPost = { id: new Date().getTime().toString() + Math.random(), body: userInput }

    //add user input in our list in state
    setList((list) => {
      return [...list, newPost];
    })
    //clear input
    setuserInput('');
  }




  return (
    <section className='section-center'>
      <form onSubmit={submitHandler} action="" className="post-form">
        <h3>Post here!</h3>
        <div className="form-control">
          <input value={userInput} onChange={inputHandler} type="text" className="post" placeholder='e.g. Bunny' />
          <button type='submit' className='submit-btn'>submit </button>
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
                  <button type='button' className='edit-btn'><AiFillEdit /></button>
                  <button id={item.id} className="delete-btn" type='button'><FaTrash /></button>
                </div>
              </article>
            )
          })}

          <button type='button' className='clear-btn'>clear All</button>
        </div>
      </div>
    </section>
  );
}

export default App;
