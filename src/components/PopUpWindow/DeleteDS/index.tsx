import React from "react";
import PopUpWindow from "../PopUpWindowTemplate";
import "./deleteDS.sass";

const PUW_DeleteDS = ({ isOpen, handleClose, deleteAction }: { isOpen: boolean, handleClose: Function, deleteAction: Function }) => {

    return (
        <PopUpWindow
            isOpen={isOpen} 
            handleClose={handleClose}
            content={
                <div className="content" >
                    <h1 className="content_title" >Delete Design System</h1>
                    <p className="content_text" >
                        This action is irreversible. <br />
                        Are you sure you want to delete the design system?
                    </p>
                </div>
            }
            secondaryButtonName="Cancel"
            primaryButtonName="Delete"
            primaryButtonType="-alert"
            buttonAction={deleteAction}
        />
    );
}

export default PUW_DeleteDS;