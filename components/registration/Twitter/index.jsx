import Wrapper from "components/Wrapper";
import Button from "components/Button";
import styles from "./styles.module.scss";

function Twitter() {
    return (<>
        <Wrapper className={styles.wrapper}>
            <img className={styles.avatar} src="images/default_avatar.svg" alt="default avatar" />
            <p className={styles.text}>Username</p>
            <Button className={styles.button}>Import from Twitter <img className={styles.img} src="/images/arrow.svg" alt="arrow" /></Button>
            <div className={styles.bottomText}>Enter my info manually</div>
        </Wrapper>
    </>);
}

export default Twitter;