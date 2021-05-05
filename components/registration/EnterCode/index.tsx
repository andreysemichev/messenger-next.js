import Wrapper from "components/Wrapper";
import Button from "components/Button";
import Preloader from "components/Preloader";
import styles from "./styles.module.scss";
import { ChangeEvent, useState } from "react";

const EnterCode: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [codes, setCodes] = useState<Array<string>>(["", "", "", ""]);
    const isBtnDisabled = !codes.every(item => item);

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const itemID = target.getAttribute("data-number");

        const tempArr = [...codes];
        tempArr[itemID] = value;

        setCodes(tempArr);

        if (target.nextSibling) {
            (target.nextSibling as HTMLInputElement).focus();
        }
    }

    const onSubmit = () => {
        setIsLoading(true);
    }

    if (isLoading) {
        return (<>
            <Wrapper className={styles.wrapper}>
                <div className={styles.preloader}>
                    <div className={styles.preloaderSvg}><Preloader color="#7f8792" /></div>
                    <div className={styles.preloaderText}>Activation in progress...</div>
                </div>
            </Wrapper>
        </>);
    }

    return (<>
            <Wrapper className={styles.wrapper}>
                <h3 className={styles.title}>Enter your phone</h3>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.textField}
                        maxLength={1}
                        type="tel"
                        data-number={0}
                        onChange={handleChangeInput}
                        value={codes[0]}
                    />    
                    <input
                        className={styles.textField}
                        maxLength={1}
                        type="tel"
                        data-number={1}
                        onChange={handleChangeInput}
                        value={codes[1]}
                    /> 
                    <input
                        className={styles.textField}
                        maxLength={1}
                        type="tel"
                        data-number={2}
                        onChange={handleChangeInput}
                        value={codes[2]}
                    /> 
                    <input
                        className={styles.textField}
                        maxLength={1}
                        type="tel"
                        data-number={3}
                        onChange={handleChangeInput}
                        value={codes[3]}
                    />         
                </div>
                
                <Button 
                    className={styles.button}
                    disabled={isBtnDisabled}
                    onClick={onSubmit}
                > Next <img className={styles.img} src="/images/arrow.svg" alt="arrow" />
                </Button>
            </Wrapper>
        </>);
}

export default EnterCode;