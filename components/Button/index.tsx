import cn from "classnames";
import { MouseEvent } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
    disabled?: boolean,
    color?: "green" | "gray",
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
    className: string
};

const Button: React.FC<ButtonProps> = ({children, disabled, color, onClick, className}) => {
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