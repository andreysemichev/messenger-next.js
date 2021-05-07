import Wrapper from "components/Wrapper";
import Button from "components/Button";
import Preloader from "components/Preloader";
import styles from "./styles.module.scss";
import { ChangeEvent, useState } from "react";
import axios from "core/axios";
import { useRouter } from "next/router";

const EnterCode: React.FC = () => {
    const router = useRouter();
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

    const onSubmit = async () => {
        setIsLoading(true);

        try {
            // запрос на сервер
            // await axios.get("/");
            router.push("/rooms");
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
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
                    { codes.map((code, index) => <input
                        className={styles.textField}
                        maxLength={1}
                        key={index}
                        type="tel"
                        data-number={index}
                        onChange={handleChangeInput}
                        value={code}
                    /> )}     
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