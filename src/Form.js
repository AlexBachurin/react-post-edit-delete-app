import React from 'react'
import Alert from './Alert'

export default function Form({ submitHandler, userInput, inputHandler, isEdit, alert, removeAlert, list }) {
    return (
        <>
            <form onSubmit={submitHandler} action="" className="post-form">
                {alert.show ? <Alert list={list} alert={alert} removeAlert={removeAlert} /> : null}
                <h3>Post here!</h3>
                <div className="form-control">
                    <input value={userInput} onChange={inputHandler} type="text" className="post" placeholder='e.g. Bunny' />
                    {/* if isEdit is true we display text 'Edit' else 'Submit' */}
                    <button type='submit' className='submit-btn'>{isEdit ? 'edit' : 'submit'} </button>
                </div>
            </form>
        </>
    )
}
