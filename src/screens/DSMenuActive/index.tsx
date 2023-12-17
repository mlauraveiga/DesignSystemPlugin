import React from 'react';
import './DSMenuActive.sass';
import SearchBox from '../../components/Search';
import ContentMenu from '../../components/PopUpMenu/ContentMenu';
import Dropdown from '../../components/Dropdown';

function DSMenuActive() {
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
    </div>
  );
}

export default DSMenuActive;