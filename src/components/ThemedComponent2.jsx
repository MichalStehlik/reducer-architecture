import { useAppContext } from "../providers/ApplicationProvider"
import "./ThemedComponent.css"

const ThemedComponent = () => {
    const [{ theme2 }] = useAppContext();
    return (
        <div className={"component " + theme2}>Komponenta</div>
    );
}
export default ThemedComponent;