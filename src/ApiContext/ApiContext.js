import React, { useContext, useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    const [chatId, setChatId] = useState();
    const [type, chat_id] = window.location.search.split("=");
    useEffect(() => {
        if (type === "?chat_id") {
            setChatId(chat_id);
        } else {
            setChatId("");
        }
    }, [chat_id, type]);
    async function getUser() {
        fetch("https://wonpay.thesmart.uz/api/bot-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setChatId()
            })
            .catch((err) => console.log(err));
    }

    getUser();
    return (
        <APIContext.Provider
            value={{
                chatId,
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

export function useCarts() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}

APIContextProvider.propTypes = {
    children: PropTypes.any,
};
