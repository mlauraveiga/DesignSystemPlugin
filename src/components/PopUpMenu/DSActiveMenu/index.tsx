import React from "react";
import PopUp from "../PopUpTemplate";
import MenuHamburger from "../../../assets/icons/menuHamburger";

const options = [
  {
    id: '1',
    title: 'Archived Design Systems',
    path: 'ds-menu-archive'
  },
  {
    id: '2',
    title: 'Open Website',
  },
  {
    id: '3',
    title: 'Report a Bug',
    path: 'report-bug'
  }
]

const DSActiveMenu = () => {
    return (  
        <div >
            <PopUp option={options} icon={<MenuHamburger />} place="down left" />
        </div>
    );
}
 
export default DSActiveMenu;