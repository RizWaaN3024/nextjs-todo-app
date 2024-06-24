"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My Todo List</h1>
      <form>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter Title Here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter Description Here'/>
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
    </>
  )
}

export default page
