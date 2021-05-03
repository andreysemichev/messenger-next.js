import cn from "classnames";
import styles from "./styles.module.scss";

function Wrapper({ children, className }) {
    return (<>
        <div className={cn(className, styles.wrapper)}>
            {children}
        </div>
    </>);
}

export default Wrapper;