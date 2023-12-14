import React from "react";
import "./toggle.sass";

const Toggle = () => {
    return (
        <div>
            <label className="toggle">
                <input className="toggle-checkbox" type="checkbox" />
                <div className="toggle-switch"></div>
            </label>
        </div>
    );
}

export default Toggle;