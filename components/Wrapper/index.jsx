import cn from "classnames";
import styles from "./styles.module.scss";

function Wrapper({ children, className }) {
    return (<>
        <div className={cn(className, styles.wrapper)}>
            <div className={cn(className, styles.wrapperInner)}>
                {children}
            </div>
        </div>
    </>);
}

export default Wrapper;