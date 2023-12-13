import React from 'react';
import './DSMenuActive.sass';
import Search from '../../components/Search';
import IconPopUpButton from '../../components/Buttons/IconPopUpButton';

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
    <div>
      <Search />
      <IconPopUpButton options={options1} onClick={""} /> 
    </div>
  );
}

export default DSMenuActive;