import React from "react";
import { adminMenuButtons } from "../../data/menuButtons";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuCards = ({ app }) => {
    if (app === 'admin') {
        return (
            <div className="admin-menu">
                {adminMenuButtons.map(button => (
                    <MenuItem key={button.link.toString()} {...button}/>
                ))}
            </div>
        )
    }
};

export default MenuCards;

MenuCards.protoTypes = {
    app: PropTypes.string
}