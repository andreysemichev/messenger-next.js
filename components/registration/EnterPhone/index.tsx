import NumberFormat from "react-number-format";
import Wrapper from "components/Wrapper";
import Button from "components/Button";
import styles from "./styles.module.scss";
import { useState } from "react";

type valueState = {
    formattedValue: string
    value: string,
};

const EnterPhone: React.FC = () => {
    const [value, setValue] = useState<valueState>({} as valueState);
    const isBtnDisabled = !value.formattedValue || value.formattedValue.includes("_");

    const handleUpdateValue = ({formattedValue, value}) => {
        setValue({formattedValue, value});
    }

    return (<>
        <Wrapper className={styles.wrapper}>
            <h3 className={styles.title}>Enter your phone</h3>
            <NumberFormat
                className={styles.textField}
                format="+# (###) ###-##-##"
                mask="_"
                placeholder="+7 (999) 999-99-99"
                value={value.value}
                onValueChange={handleUpdateValue}
            />
            <Button 
                className={styles.button}
                disabled={isBtnDisabled}
            > Next <img className={styles.img} src="/images/arrow.svg" alt="arrow" />
            </Button>
        </Wrapper>
    </>);
}

export default EnterPhone;