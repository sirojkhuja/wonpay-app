import React, { useContext, useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    const [chat_id, setChat_id] = useState();
    const [type, chatid] = window.location.search.split("=");
    console.log("chatid: ", chatid, "type:", type);
    useEffect(() => {
        if (type === "?chat_id") {
            setChat_id(chatid);
        } else {
            setChat_id("");
        }
    }, []);
    console.log(chat_id);
    async function getUser() {
        // const requestOptions = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },

        //     body: JSON.stringify({
        //         chat_id: 577666875,
        //     }),
        // };
        // fetch(`https://wonpay.thesmart.uz/api/bot-login`, requestOptions)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log("user", data);
        //     })
        //     .catch((err) => console.log(err.message));

        fetch("https://wonpay.thesmart.uz/api/bot-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: 577666875,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    getUser();
    return (
        <APIContext.Provider
            value={{
                chat_id,
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
