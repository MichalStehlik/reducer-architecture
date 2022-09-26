import { useAppContext, SET_THEME, THEME_LIGHT, THEME_DARK } from "../providers/ApplicationProvider"

export const Panel = () => {
    const [, dispatch] = useAppContext();
    return(
        <div>
            <button onClick={e => dispatch({type: SET_THEME, payload: THEME_LIGHT})}>Light</button>
            <button onClick={e => dispatch({type: SET_THEME, payload: THEME_DARK})}>Dark</button>
        </div>
    );
}

export default Panel;