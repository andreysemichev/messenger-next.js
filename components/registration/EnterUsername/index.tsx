import Wrapper from "components/Wrapper";
import Button from "components/Button";
import styles from "./styles.module.scss";
import { ChangeEvent, useContext, useState } from "react";
import { MainContext } from "pages";

const EnterUsername: React.FC = () => {
    const {onNextStep} = useContext(MainContext);
    const [value, setValue] = useState<string>("");
    const isBtnDisabled = value.length < 3;

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    return (<>
        <Wrapper className={styles.wrapper}>
            <h3 className={styles.title}>Enter your username</h3>
            <input
                className={styles.textField}
                type="text"
                placeholder="..."
                value={value}
                onChange={handleChangeInput}
            />
            <Button
                className={styles.button}
                onClick={onNextStep}
                disabled={isBtnDisabled}
            >
                Next <img className={styles.img} src="/images/arrow.svg" alt="arrow" />
            </Button>
        </Wrapper>
    </>);
}

export default EnterUsername;