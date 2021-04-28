import React from 'react'

const SortButtons = ({setSort}) => {
    const handleOnChange = (evt) => {
        setSort(evt.target.id)
    }
    return (
        <div className="flex justify-center">
            <button id="name" className="mb-3 ml-10 rounded-full  items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400" onClick={handleOnChange}>
                By Name
            </button>
            <button id="state" className="mb-3 ml-2 rounded-full  items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400" onClick={handleOnChange}>
                By State
            </button>
        </div>
    )
}

export default SortButtons

