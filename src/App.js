import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
function App() {
  //setup list to store our items
  const [list, setList] = useState([])
  return (
    <section className='section-center'>
      <form action="" className="post-form">
        <h3>Post here!</h3>
        <div className="form-control">
          <input type="text" className="post" placeholder='e.g. Bunny' />
          <button type='submit' className='submit-btn'>submit </button>
        </div>
      </form>
      <div className="post-container">
        <div className="post-list">
          {/* display list */}
          {list.map(item => {
            return (
              <article key={new Date().getTime() + Math.random()} className="post-item">
                <p className="title">{item}</p>
                <div className="btn-container">
                  <button type='button' className='edit-btn'><AiFillEdit /></button>
                  <button className="delete-btn" type='button'><FaTrash /></button>
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
