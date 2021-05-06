import Wrapper from "components/Wrapper";
import Button from "components/Button";
import Avatar from "components/Avatar";
import styles from "./styles.module.scss";
import { ChangeEvent, useState, useContext } from "react";
import { MainContext } from "pages";

const ChooseAvatar: React.FC = () => {
    const [avatarUrl, setAvatarUrl] = useState<string>("images/default_avatar.svg");
    const {onNextStep} = useContext(MainContext);
    // const inputFileRef = useRef<HTMLInputElement>(null);

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setAvatarUrl(imageUrl);
        }
    };

    return (<>
        <Wrapper className={styles.wrapper}>
            <label className={styles.avatarWrapper}>
                <Avatar
                    src={avatarUrl}
                    width="150px"
                    height="150px"
                />
                <input type="file" id="avatar" onChange={handleChangeImage} hidden />
                <div className={styles.bottomText}>Choose a different photo</div>
            </label>
            <Button className={styles.button} onClick={onNextStep}>Next <img className={styles.img} src="/images/arrow.svg" alt="arrow" /></Button>
        </Wrapper>
    </>);
}

export default ChooseAvatar;