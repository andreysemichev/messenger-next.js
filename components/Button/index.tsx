import cn from "classnames";
import { MouseEvent } from "react";
import styles from "./styles.module.scss";

const colors = {
    green: styles.buttonGreen,
    gray: styles.buttonGray,
};

interface ButtonProps {
    disabled?: boolean,
    color?: keyof typeof colors,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
    className: string
};

const Button: React.FC<ButtonProps> = ({children, disabled, color, onClick, className}) => {
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