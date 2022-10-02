import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ link, image, alt, text }) => {
    return (
        <div key={link.toString()} className="category-card">
            <div className="home-category-img">
                <Link to={link}>
                    <img
                        src={image}
                        alt={alt}
                    />
                </Link>
            </div>
            <Link to={link}>
                <div className="home-category-text">
                    <span>{text}</span>
                </div>
            </Link>
        </div>
    )
};

export default MenuItem;
