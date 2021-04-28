import React from 'react'

const SearchBar = ({setSearch}) => {
  const handleOnChange = (evt) => {
    setSearch(evt.target.value)
  }
  return (
    
    <div className="p-8">
    <div className="bg-white flex items-center rounded-full shadow-xl">
      <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" onChange={handleOnChange} />
      <div className="p-4">
        </div>
      </div>
    </div>
  )
}

export default SearchBar

