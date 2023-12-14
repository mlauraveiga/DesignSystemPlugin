import React from 'react';
import './DSMenuActive.sass';
import SearchBox from '../../components/Search';
import PopUp from '../../components/PopUp';
import MenuHamburger from '../../assets/icons/menuHamburger';

function DSMenuActive() {
  const options1 = [
    {
      id: 'option1',
      title: 'Editor Mode',
      toggle: true,
    },
    {
      id: 'option2',
      title: 'Change Design System',
    },
    {
      id: 'option3',
      title: 'Make Request',
    },
    {
      id: 'option4',
      title: 'Open on Website',
    },
    {
      id: 'option5',
      title: 'Report a Bug',
    }
  ]

  return (
    <div>
      <div className='search_menu'>
        <SearchBox />
        <PopUp option={options1} onClick={() => { }} icon={<MenuHamburger />} />
      </div>
      <PopUp option={options1} onClick={() => { }} icon={<MenuHamburger />} />
    </div>
  );
}

export default DSMenuActive;