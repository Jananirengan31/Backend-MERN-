import { useState, useEffect } from "react";

const Form = () => {

     const [data,setData]=useState([])
     
     const fetchdatas= async () => {
      
      try{
        const res = await fetch (" https://dummyjson.com/products")
        const parsedata = await res.json()


        setData(parsedata.products)

      }catch(error){

      }
     
     }
      useEffect(()=>{
        fetchdatas()
      },[])
     
  return (
 
    <>

     <div>
       <h1>Products</h1>
        {data.map((e)=>(
          <div key={e.id}>
            <img src={e.thumbnail} alt={e.id} />
            <h2>{e.title}</h2>
            <h2>{e.price}</h2>

          </div>
        ))}
     </div>
    </>
  );
};

export default Form;