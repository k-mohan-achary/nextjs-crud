"use client"; 
import React, { useState } from 'react';
import { useRouter } from "next/navigation";


export default function AddTopic() {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");

  const router = useRouter();



  const handleSubmit = async ( e ) => {
    e.preventDefault();

    if (!title || !description || !name || !email || !phone || !message) {
      alert("Title and description are required.");
      return;
    }
    
    try {
      const res = await fetch('http://localhost:3000/api/topics',{ 
        method:"post",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify({title,description,name,email,phone,message})
      } );
      if (res.ok){
        router.push('/');

      } else {
        throw new Error("Failed to create a topic")
4      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
   <>
   <div>
    <div>
     <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <input 
      onChange={(e) =>setTitle(e.target.value)}
      value={title}
      className='border border-slate px-8 py-2' 
      type="text" placeholder='Topic Title' 
      />
      <input 
      onChange={(e) =>setDescription(e.target.value)}
      value={description}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='Topic Desc'
      />  
      <input 
      onChange={(e) =>setName(e.target.value)}
      value={name}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='Name'
      />  
      
      <input 
      onChange={(e) =>setEmail(e.target.value)}
      value={email}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='Email'
      />  
      <input 
      onChange={(e) =>setPhone(e.target.value)}
      value={phone}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='phone'
      />  
      <input 
      onChange={(e) =>setMessage(e.target.value)}
      value={message}
      className='border border-slate px-8 py-2' type="text" 
      placeholder='message'
      />  

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Topic
      </button>

     </form>
    </div>
   </div>
   
   </>
  )
}
 