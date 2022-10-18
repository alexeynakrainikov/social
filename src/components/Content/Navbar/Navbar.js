import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (<div className={styles.navBar}>
        <ul>
            <li>
                <NavLink to='/Main' className={({isActive}) => isActive ? styles.activeItem : ''}>Главная</NavLink>
            </li>
            <li>
                <NavLink to="/Forum" className={({isActive}) => isActive ? styles.activeItem : ''}>Форум</NavLink>
            </li>
            <li>
                <NavLink to="/Articles" className={({isActive}) => isActive ? styles.activeItem : ''}>Статьи</NavLink>
            </li>
            <li>
                <NavLink to="/Users" className={({isActive}) => isActive ? styles.activeItem : ''}>Пользователи</NavLink>
            </li>
            <li>Магазин</li>
        </ul>
    </div>)
}
export default Navbar