import React from "react";
import { MenuButtons } from "../../data/menuButtons";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuCards = ({ app }) => {
        return (
            <div className={`${app}-menu`}>
                {MenuButtons[app].map(button => (
                    <MenuItem key={button.link.toString()} {...button}/>
                ))}
            </div>
        )
};

export default MenuCards;

MenuCards.protoTypes = {
    app: PropTypes.string
}