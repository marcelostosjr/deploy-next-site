import HeaderTop from "./HeaderTop"
import Navbar from "./Navbar"
import styles from "./HeaderMain.module.css"

function HeaderMain(){
    return(
        <nav className={styles.HeaderMain}>
            <HeaderTop/>
            <Navbar/>
        </nav>
    )
}

export default HeaderMain