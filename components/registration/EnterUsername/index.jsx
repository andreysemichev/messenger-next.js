import Wrapper from "components/Wrapper";
import Button from "components/Button";
import styles from "./styles.module.scss";

function EnterUsername() {
    return (<>
        <Wrapper className={styles.wrapper}>
            <h3 className={styles.title}>Enter your username</h3>
            <input className={styles.textField} type="text" placeholder="..." />
            <Button className={styles.button}>Next <img className={styles.img} src="/images/arrow.svg" alt="arrow" /></Button>
        </Wrapper>
    </>);
}

export default EnterUsername;