import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <img src="/assets/icons/Planty.svg" alt="planty"/>
            <div className={styles.auth}>
                <img src="/assets/icons/person.svg" alt="man"/>
                <span>My Account</span>
            </div>
        </div>
    )
}
export default Header