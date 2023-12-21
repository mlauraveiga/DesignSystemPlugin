import React from 'react';
import './DSMenuActive.sass';
import SearchBox from '../../components/Search';
import ContentMenu from '../../components/PopUpMenu/ContentMenu';
import Dropdown from '../../components/Dropdown';
import DSCard from '../../components/DSCard';
import useFetch from '../../useFetch';

const options = [
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

  const handleSelect = (selectedValue) => {
    console.log('Selected option:', selectedValue);
  };

  return (
    <div>
      <div className='header'>
        <SearchBox />
        <ContentMenu />
      </div>
      <h1 className='title'>Design Systems</h1>
      <div className='div_buttons' >
        <Dropdown option={options} handleSelect={handleSelect} />
      </div>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {designSystems && <div className='cards'>
        <DSCard cards={designSystems} />
      </div>}

    </div>
  );
}

export default DSMenuActive;