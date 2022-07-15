import React from 'react';
import {useParams,useNavigate } from 'react-router-dom';
import useFetch from '../useFetch';

export default function Blogdetails() {

    const {id} = useParams();
    const {data: blog ,error}=useFetch("http://localhost:8000/blogs" + id);
    const history=useNavigate ();

    const handleClick=()=>{

      async function getFetch(){
        await fetch("http://localhost:8000/blogs"+blog.id,{ 
        method:"DELETE"
      }).then(()=>{
        history("/");
      })
      }
      getFetch();
      
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
