import React, { useState } from 'react'
import { Search } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Menu } from 'lucide-react';

const SearchBar = ({ submitMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      alert('검색 기능 구현중')
      // submitMessage(message);
      
      setMessage('');
  }

  return (
    <div className='flex justify-center'>
      <div className='flex justify-between fixed w-11/12 top-6 z-10'>
        <div className='flex w-5/6 items-center  max-w-screen-md h-11 rounded-l-lg rounded-r-lg border-gray-200 bg-white shadow-lg'>
            <form className='flex w-full ml-2 justify-between items-center' onSubmit={handleSubmit}>
                <Menu />
                <input
                onChange={(e)=>setMessage(e.target.value)}
                value={message} 
                className='w-full mx-2 border-gray-200 bg-white'
                type="text" placeholder='장소, 코스, 주변시설 검색' />
            </form>
            <Mic className='mx-2' onClick={() => alert('STT 기능 구현중')} />
        </div>
        <button className='flex flex-col gap-[2px] items-center justify-center w-[12%] rounded-lg border-gray-200 bg-violet-600 shadow-lg mx-0 my-0'>
          <Search className='text-white' />
          <span className='text-[8px] text-white' onClick={() => alert('검색 기능 구현중')}>검색</span>
        </button>
      </div>
    </div>
    
  )
}

export default SearchBar