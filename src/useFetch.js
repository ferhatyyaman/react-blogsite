import  { useEffect, useState } from 'react'

const useFetch=(url)=>{

    const [data,setData]=useState(null);
    const [error,setError]=useState(null);

    useEffect(()=>{
      async function getFetch(){
       await fetch(url)
        .then(res=>{
           if(!res.ok){
             throw Error("fetch api bağlanamadı");
           }
         return res.json();})
        .then(data=>{
           setData(data);
           setError(null);
         })
        .catch(err=>{setError(err.message)})
      }
       getFetch(); 
       },[url]);

       
       return {data,error}


       
}

export default useFetch;