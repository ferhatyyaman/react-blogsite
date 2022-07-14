import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

export default function Create() {

  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const [author,setAuthor]=useState('mario');
  const history=useNavigate ();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const blog ={title,body,author};

    fetch("http://localhost:8000/blogs",{
      method:"Post",
      Headers:{"content-Type": "application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log("new blog added");
      history("/");
    })
  }

const bodyHandler = (event) => {
  setBody({body: event.target.value })
}
const authorHandler = (event) => {
  setAuthor({author: event.target.value })
}

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <label>blog title:</label>
        <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)}></input>

        <label>blog body:</label>
        <textarea required value={body} onChange={(event) => setBody(event.target.value)}></textarea>

        <label>blog author:</label>
        <select value={author} onChange={(event) => setAuthor(event.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>add blog</button>
      </form>
    </div>
  )
}
