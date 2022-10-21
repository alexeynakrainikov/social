import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <img src="/assets/icons/Planty.svg" alt="planty"/>
            <div className={styles.auth}>
                <img src="/assets/icons/person.svg" alt="man"/>
                <span className={styles.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to="/Login"> Login </NavLink>}
                </span>
            </div>
        </div>
    )
}
export default Header