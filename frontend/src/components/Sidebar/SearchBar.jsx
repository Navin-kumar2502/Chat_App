import React from 'react';
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered input-accent rounded-full mr-5 max-w-xs" />
      <button type="submit" className='btn btn-circle bg-green-400 text-black hover:text-white text-lg hover:text-2xl'>
      <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
