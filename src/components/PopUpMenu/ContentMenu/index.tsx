import React from "react";
import PopUp from "../PopUpTemplate";
import MenuHamburger from "../../../assets/icons/menuHamburger";

const ContentMenu = () => {
    const options = [
        {
          id: 'option1',
          title: 'Editor Mode',
          toggle: true
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
          path: 'report-bug'
        }
      ]

    return (  
        <div >
            <PopUp option={options} icon={<MenuHamburger />} place="down left" />
        </div>
    );
}
 
export default ContentMenu;