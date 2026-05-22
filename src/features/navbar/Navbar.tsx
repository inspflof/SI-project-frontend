import { Link } from "react-router";

import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                Home
            </Link>
            <Link to="/drop">
                Drop car
            </Link>
        </nav>
    )
}