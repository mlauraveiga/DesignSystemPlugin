import React, { useState } from 'react';
import './DSMenuActive.sass';
import SearchBox from '../../components/Search';
import Dropdown from '../../components/Dropdown';
import DSCard from '../../components/DSCard';
import useFetch from '../../useFetch';
import DSActiveMenu from '../../components/PopUpMenu/DSActiveMenu';

const cardOptions = [
  {
    id: 'option1',
    title: 'Open',
  },
  {
    id: 'option2',
    title: 'Details',
  },
  {
    id: 'option3',
    title: 'Archive',
  }
];

const dropdownOptions = [
  {
    id: '1',
    label: 'Alphabetical'
  },
  {
    id: '2',
    label: 'Last Modified'
  },
  {
    id: '3',
    label: 'Last Created'
  },
];

function DSMenuActive() {
  const { data: designSystems, isPending, error } = useFetch('http://localhost:8000/designSystems/');
  const [sortOption, setSortOption] = useState("Alphabetical");
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelect = (selectedValue) => {
    console.log('Selected option:', selectedValue.label);
    setSortOption(selectedValue.label);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <div className='header'>
        <SearchBox onSearch={handleSearch} />
        <DSActiveMenu />
      </div>
      <h1 className='title'>Design Systems</h1>
      <div className='div_buttons' >
        <Dropdown option={dropdownOptions} handleSelect={handleSelect} />
      </div>

      {error}
      {isPending}
      {designSystems && <div className='cards'>
        <DSCard cards={designSystems} isActive={true} options={cardOptions} sortOption={sortOption} searchQuery={searchQuery} />
      </div>}

    </div>
  );
}

export default DSMenuActive;