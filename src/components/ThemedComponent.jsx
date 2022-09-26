import { useAppContext } from "../providers/ApplicationProvider"
import "./ThemedComponent.css"

const ThemedComponent = () => {
    const [{ theme }] = useAppContext();
    return (
        <div className={"component " + theme}>Komponenta</div>
    );
}
export default ThemedComponent;