import React, { useContext, useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    const [user, setUser] = useState(false);
    const [type, chat_id] = window.location.search.split("=");
    useEffect(() => {
        if (type === '?chat_id') {
            fetch(`https://wonpay.thesmart.uz/api/bot-login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser(data.data)
                })
                .catch((err) => console.log(err));
        }
        // eslint-disable-next-line
    }, []);

    return (
        <APIContext.Provider
            value={{
                user,
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}

APIContextProvider.propTypes = {
    children: PropTypes.any,
};
