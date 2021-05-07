import cn from "classnames";
import Link from "next/link";
import Avatar from "components/Avatar";
import Button from "components/Button";
import styles from "./styles.module.scss";

interface ProfileProps {
    avatarSrc: string,
    fullName: string,
    username: string,
    isFollow?: boolean,
    about?: string,
    followers: number,
    following: number,
};

const Profile: React.FC<ProfileProps> = ({ avatarSrc, fullName, username, isFollow, about, followers, following }) => {
    return (<>
        <div className={cn(styles.container, styles.wrapper)}>
            <Link href="/rooms">
                <a className={styles.back}>
                    <img className={styles.backImg} src="/images/black_arrow.svg" alt="arrow" /> to rooms
                </a>
            </Link>
            <div className={styles.wrapperTop}>
                <div className={styles.userInfoLeft}>
                    <div className={styles.avatar}>
                        <Avatar src={avatarSrc} width="80px" height="80px" />
                    </div>
                    <div className={styles.user}>
                        <div className={styles.fullName}>{fullName}</div>
                        <div className={styles.username}>@{username}</div>
                    </div>
                    {isFollow && <>
                        <Button className={styles.button}>{isFollow? "following" : "follow"}</Button>
                    </>}
                </div>
                <div className={styles.userInfoRight}>
                    <div className={styles.counterWrapper}>
                        <div className={styles.counterNum}>{followers}</div>
                        <div className={styles.counterText}>followers</div>
                    </div>
                    <div className={styles.counterWrapper}>
                        <div className={styles.counterNum}>{following}</div>
                        <div className={styles.counterText}>following</div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapperBottom}>{about}</div>
        </div>
    </>);
}

export default Profile;