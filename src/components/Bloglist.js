import React from 'react'
import {Link} from 'react-router-dom'

export default function Bloglist({blogs}) {
    
    
  return (
    <div className='blog-list'>
         {blogs.map((blog)=>(
        <div className='blog-preview' key={blog.id}>
            <Link to={"/blogs/${blog.id}"}>     {/* !!hatalı olabilir*/}
            <h2>{blog.title}</h2>
             <p>Written by{blog.author}</p>
             
            </Link>
        </div>
      ))}
        </div>
  )
}