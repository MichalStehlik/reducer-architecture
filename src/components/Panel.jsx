import { useAppContext, SET_THEME, SET_THEME1, THEME_LIGHT, THEME_DARK } from "../providers/ApplicationProvider"

export const Panel = () => {
    const [{theme}, dispatch] = useAppContext();
    return(
        <div>
            <button onClick={e => dispatch({type: SET_THEME, payload: THEME_LIGHT})}>Light</button>
            <button onClick={e => dispatch({type: SET_THEME, payload: THEME_DARK})}>Dark</button>
            <button onClick={e => dispatch({type: SET_THEME1, payload: THEME_DARK})}>Dark1</button>
        </div>
    );
}

export default Panel;