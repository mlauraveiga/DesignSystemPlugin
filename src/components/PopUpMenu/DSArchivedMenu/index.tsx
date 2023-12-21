import React from "react";
import PopUp from "../PopUpTemplate";
import MenuHamburger from "../../../assets/icons/menuHamburger";

const options = [
  {
    id: '1',
    title: 'Active Design Systems',
    path: 'ds-menu-active'
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

const DSArchivedMenu = () => {
    return (  
        <div >
            <PopUp option={options} icon={<MenuHamburger />} place="down left" />
        </div>
    );
}
 
export default DSArchivedMenu;