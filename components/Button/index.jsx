import cn from "classnames";
import styles from "./styles.module.scss";

function Button({ children, disabled, color, onClick, className }) {
    const colors = {
        green: styles.buttonGreen,
        gray: styles.buttonGray,
    };

    return (<>
        <button
            onClick={onClick}
            type="button"
            className={cn(className, styles.button, colors[color])}
            disabled={disabled}
        >
            {children}
        </button>
    </>);
}

export default Button;