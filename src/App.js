import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
function App() {
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
          <article className="post-item">
            <p className="title">Nails</p>
            <div className="btn-container">
              <button type='button' className='edit-btn'><AiFillEdit /></button>
              <button className="delete-btn" type='button'><FaTrash /></button>
            </div>
          </article>
          <article className="post-item">
            <p className="title">Fluffs</p>
            <div className="btn-container">
              <button type='button' className='edit-btn'><AiFillEdit /></button>
              <button className="delete-btn" type='button'><FaTrash /></button>
            </div>
          </article>
          <button type='button' className='clear-btn'>clear All</button>
        </div>
      </div>
    </section>
  );
}

export default App;
