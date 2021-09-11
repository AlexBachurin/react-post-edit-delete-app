import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiFillEdit, AiFillLike, AiFillHeart } from 'react-icons/ai'
export default function ListItem({ item, editItem, deleteItem, likeItem }) {
    return (
        <div>
            <article key={item.id} className='post-item'>
                <div className="post-title">
                    <p className="title">{item.body}</p>
                    <span className={item.liked ? 'show-like' : 'hide-like'}><AiFillHeart /></span>

                </div>
                <div className="btn-container">
                    <button onClick={editItem} id={item.id} type='button' className='edit-btn'><AiFillEdit /></button>
                    <button onClick={deleteItem} id={item.id} className="delete-btn" type='button'><FaTrash /></button>
                    <button onClick={likeItem} id={item.id} type='button' className='like-btn'><AiFillLike /></button>
                </div>
            </article>
        </div>
    )
}
