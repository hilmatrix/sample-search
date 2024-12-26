"use client"
import ListComponent from "@/component/ListComponent";
import { USERS } from "@/constants/User";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState('');
  const [filteredUser, setFilteredUser] = useState([])

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = USERS.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUser(filtered);
  };
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
     <div className="flex items-center justify-center mb-4">
        <form onSubmit={handleSearch} className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div>
      <ul>
  {filteredUser && filteredUser.length > 0
    ? filteredUser.map((user, index) => (
        <li key={index} className="m-[10px]">
          <ListComponent
            name={user.name}
            email={user.email}
            profile_url={user.profile_url}
          />
        </li>
      ))
    : USERS.map((user, index) => (
        <li key={index} className="m-[10px]">
          <ListComponent
            name={user.name}
            email={user.email}
            profile_url={user.profile_url}
          />
        </li>
      ))}
</ul>
        
      </div>
    </div>
  );
}
