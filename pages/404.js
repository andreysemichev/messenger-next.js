import styles from "styles/error.module.scss";

function NotFound() {
    return (<>
        <div className={styles.wrapper}>
            <h1 className={styles.text}>Page not found</h1>
            <h2 className={styles.number}>404</h2>
        </div>
    </>);
}

export default NotFound;
