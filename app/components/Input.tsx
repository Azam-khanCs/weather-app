"use client"

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ handleSearch, setLocation }) => {
  return (
    <form className='flex items-center w-full md:w-2/4 '>
      <input
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
        className='w-full p-2 bg-transparent border-b-2 placeholder-white outline-none text-white' type="text" placeholder='search city here' />
      <div className='ml-[-20px] text-white cursor-pointer'>
        <AiOutlineSearch />
      </div>
    </form>
  );
};

export default Input;
