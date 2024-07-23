'use client';
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';
import { manufacturers } from '@/constants';

const SearchBar = () => {
    const [manufacturer,setManufacturer] = useState('')

    const handleSearch = () =>{}
  return (
  <form className='SearchBar' onSubmit={handleSearch}>
    <div className="searchbar_item">
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
    </div>

  </form>
  )
}

export default SearchBar
