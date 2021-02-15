import NavBar from '../nav-bar/NavBar'
import styles from '../../../styles/Header.module.scss'

function Header() {
    return(
        <header className={styles["header"]}><NavBar /></header>
    )
}

export default Header