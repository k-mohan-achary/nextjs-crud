"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface AddTopicProps {}

const AddTopic: React.FC<AddTopicProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description || !name || !email || !phone || !message) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description, name, email, phone, message })
      });
      if (res.ok) {
        router.push('/');
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div>
          <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              value={title}
              className='border border-slate px-8 py-2'
              type="text" placeholder='Topic Title'
            />
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
              value={description}
              className='border border-slate px-8 py-2' type="text"
              placeholder='Topic Desc'
            />
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              value={name}
              className='border border-slate px-8 py-2' type="text"
              placeholder='Name'
            />

            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              value={email}
              className='border border-slate px-8 py-2' type="text"
              placeholder='Email'
            />
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
              value={phone}
              className='border border-slate px-8 py-2' type="text"
              placeholder='phone'
            />
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
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
  );
};

export default AddTopic;
