import React from 'react';
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation'
import toast from 'react-hot-toast'
const SearchBar = () => {
  const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversation();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered input-accent rounded-full mr-5 max-w-xs" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button type="submit" className='btn btn-circle bg-green-400 text-black hover:text-white text-lg hover:text-2xl' onClick={handleSubmit}>
      <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
