import React, { createContext, useReducer, useContext } from "react"

export const SET_THEME = "SET_THEME";
export const SET_THEME1 = "SET_THEME1";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_THEME: {
            return { ...state, theme: action.payload, theme2: action.payload };
        }
        case SET_THEME1: {
            return { ...state, theme: action.payload };
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    theme: THEME_DARK,
    theme2: THEME_DARK,
}

export const ApplicationContext = createContext(initialState);
export const ApplicationConsumer = ApplicationContext.Consumer;

export const ApplicationProvider = props => {
    const store = useReducer(
        reducer,
        initialState
    );
    //const [state, dispatch] = store;
    return (
        <ApplicationContext.Provider value={store}>
            {props.children}
        </ApplicationContext.Provider>
    );
}

export const useAppContext = () => useContext(ApplicationContext);