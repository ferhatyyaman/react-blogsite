import React from 'react';
import {useParams,useNavigate } from 'react-router-dom';
import useFetch from '../useFetch';

export default function Blogdetails() {

    const {id} = useParams();
    const {data: blog ,error}=useFetch("http://localhost:8000/blogs" + id); //!!hatalı olabilir
    const history=useNavigate ();

    const handleClick=()=>{
      fetch("http://localhost:8000/blogs"+blog.id,{ //!!hatalı olabilir
        method:"DELETE"
      }).then(()=>{
        history("/");
      })
  }

  return (
    <div className="blog-details">

       {error && <div>{error}</div>} 
       {blog &&(
        <article>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>delete</button>
        </article>
       )}
    </div>
  )
}
