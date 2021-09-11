import React, { useState } from 'react'
import Form from './Form';
import List from './List';
function App() {
  //setup list to store our items
  const [list, setList] = useState([]);
  //store userinput
  const [userInput, setUserInput] = useState('');
  //editing boolean
  const [isEdit, setIsEdit] = useState(false)
  //item to edit
  const [itemToEdit, setItemToEdit] = useState({})
  //alert state
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' })

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
      setList(newList);
      //disable edit state
      setIsEdit(false);
      //clear input
      setUserInput('');
      //set alert
      showAlert(true, "add", "Post Edited Successfully")

    }
    else {
      //if user didnt write anything show alert
      if (userInput.length === 0) {
        showAlert(true, 'delete', 'Please Write Something')
      } else {
        //create new post as an object with a unique id and body of userinput
        //!!important to use toString() so we wont get object back as a uniq id
        const newPost = { id: new Date().getTime().toString() + Math.random(), body: userInput, liked: false }

        //add user input in our list in state
        setList((list) => {
          return [...list, newPost];
        })
        //clear input
        setUserInput('');
        showAlert(true, "add", "Post Added Sucessfully")
      }

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
    showAlert(true, "delete", "Post Removed Sucessfully")
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
    showAlert(true, "delete", 'Deleted All Posts')
  }

  //Like Item
  const likeItem = (e) => {
    const target = e.currentTarget;

    //find clicked item by id and return changed new list with changed item property in it
    //toggle item.liked property depending in which state it is right now
    const newList = list.map(item => {
      return item.id === target.id ? { ...item, liked: !item.liked } : item;
    })
    setList(newList);
  }
  //show alert message
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  //remove alert message 
  const removeAlert = () => {
    setAlert(false, '', '')
  }

  return (
    <section className='section-center'>
      <Form list={list} alert={alert} removeAlert={removeAlert} submitHandler={submitHandler} userInput={userInput} isEdit={isEdit} inputHandler={inputHandler} />
      <div className="post-container">
        <div className="post-list">
          {/* display list */}
          <List list={list} deleteItem={deleteItem} editItem={editItem} likeItem={likeItem} clearList={clearList} />
        </div>
      </div>
    </section>
  );
}

export default App;
