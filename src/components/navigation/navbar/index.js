import React from "react"

import Logo from "../Logo"
import NavigationItems from "../navigationItems"

import styles from "./navbar.module.css"

const navbar = (props) => (
    <header
        className={styles.navbar}
        style={{ backgroundColor: props.navigationData.bg }}
    >
        <div className={styles.leftSection}>
            <div className={styles.logo}>
                <Logo
                    img={props.navigationData.logoImg}
                    alt={props.navigationData.logoAlt}
                    imgLink={props.navigationData.logoLnk}
                />
            </div>
            <h1>{props.navigationData.conferenceTitle}</h1>
        </div>
        <nav className={styles.nav}>
            <NavigationItems
                linksList={props.navigationData.links}
            />
        </nav>
    </header>
)


export default navbar