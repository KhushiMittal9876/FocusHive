import React, { useState, useEffect } from 'react'
import List from "./List";
import "./ToDo.css";
import { GiFallingStar } from "react-icons/gi";

const getLocalStorage = () =>{
    let list = localStorage.getItem('list');
    if(list){
      return JSON.parse(localStorage.getItem('list'))
    }else{
      return []
    }
  }
  
  function ToDo() {
    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    // const [isCheck, setIsCheck] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && isEditing) {
        // deal with edit
        setList(list.map((item)=>{
          if(item.id === editID){
            return {...item,title:name}
          }
          return item
        }))
        setName('')
        setEditID(null)
        setIsEditing(false)
      } else {
        const newItem = { id: new Date().getTime().toString(), title: name , checked: false};
        setList([...list, newItem])
        setName("")
      }
    };
    
     const handleCheck =(id) =>{
      setList(list.map((item)=>{
        if(item.id === id){
          return {...item,checked: !item.checked}
        }
        return item
      }))
    }
    
    const clearList = ()=>{
      setList([])
    }
  
    const removeItem = (id) =>{
    setList(list.filter((item)=> item.id !== id))
    }
  
    const editItem = (id) =>{
      const specificItem = list.find((item)=> item.id === id);
      setIsEditing(true);
      setEditID(id)
      setName(specificItem.title)
    }
  
    useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(list))
    }, [list])
  
    return (
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          <h3 className='h3h'>
            To Do's <GiFallingStar />
          </h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="Enter tasks here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
        <div className="grocery-container">
          <List  items={list} removeItem ={removeItem} editItem={editItem} handleCheck={handleCheck}/>
          <button className="clear-btn" onClick={clearList}>Clear all</button>
        </div>
        )}
      </section>
    );
  }
  

export default ToDo
