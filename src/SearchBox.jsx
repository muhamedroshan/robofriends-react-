import React from 'react'

function SearchBox({OnSearchChange}) {
    return (
        <div>
            <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search'
            onChange={OnSearchChange}
            />
        </div>
    )
}

export default SearchBox
