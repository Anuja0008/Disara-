import React, { useState } from 'react';
import { 
  BsFillBellFill, 
  BsFillEnvelopeFill, 
  BsPersonCircle, 
  BsSearch, 
  BsJustify 
} from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <div className='search-bar'>
          <BsSearch className='icon' />
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearchChange}
            className='search-input'
          />
        </div>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;
