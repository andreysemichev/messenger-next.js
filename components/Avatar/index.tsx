import cn from "classnames";
import styles from "./styles.module.scss";

interface AvatarProps {
    src: string,
    width: string,
    height: string,
    className?: string,
    isVoice?: boolean,
};

const Avatar: React.FC<AvatarProps> = ({src, width, height, className, isVoice}) => {
    return (<>
        <div className={cn(styles.avatar, isVoice? styles.border : "", className)} >
            <img
                style={{width, height}}
                src={src}
                alt="user avatar" 
            />
        </div>
    </>);
}

export default Avatar;