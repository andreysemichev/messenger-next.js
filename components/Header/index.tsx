import Link from "next/link";
import styles from "./styles.module.scss";

interface AvatarProps {
    avatarSrc: string,
    fullName: string,
};

const Avatar: React.FC<AvatarProps> = ({ avatarSrc, fullName }) => {
    return (<>
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/rooms">
                    <a>
                        <div className={styles.logo}>
                            <img src="/images/logo.svg" alt="example logo" />
                            Messenger
                        </div>
                    </a>
                </Link>
                <Link href="/profile/joe_black">
                    <a>
                        <div className={styles.user}>
                            <div className={styles.fullName}>{fullName}</div>
                            <div className={styles.avatar}>
                                <img src={avatarSrc} alt="avatar" />
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </header>
    </>);
}

export default Avatar;