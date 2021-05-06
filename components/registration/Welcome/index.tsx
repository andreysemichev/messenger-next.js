import Wrapper from "components/Wrapper";
import Button from "components/Button";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { MainContext } from "pages";

const Welcome: React.FC = () => {
    const {onNextStep} = useContext(MainContext);

    return (<>
        <Wrapper className={styles.wrapper}>
            <h3 className={styles.title}>Welcome!</h3>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse perferendis aliquam impedit sunt, sapiente aspernatur autem sit dignissimos excepturi.</p>
            <Button className={styles.button} onClick={onNextStep}>Get Your Username <img className={styles.img} src="/images/arrow.svg" alt="arrow" /></Button>
            <div className={styles.bottomText}>Have an invite text? Sign In</div>
        </Wrapper>
    </>);
}

export default Welcome;