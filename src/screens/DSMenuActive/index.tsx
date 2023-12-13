import React from 'react';
import './DSMenuActive.sass';
import SearchBox from '../../components/Search';
import PopUp from '../../components/PopUp_Down_Left';
import MenuHamburger from '../../assets/icons/menuHamburger';

function DSMenuActive() {
  const options1 = [
    {
      id: 'option1',
      title: 'Option 1',
      description: 'Option 1 description',
    },
    {
      id: 'option2',
      title: 'Option 2',
      description: 'Option 2 description',
    },
  ]

  return (
    <div className='search_menu'>
      <SearchBox />
      <PopUp options={options1} onClick={() => {}} icon={<MenuHamburger />} />
    </div>
  );
}

export default DSMenuActive;