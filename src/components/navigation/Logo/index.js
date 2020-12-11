import React from "react"

import styles from "./logo.module.css"

const logo = (props) => (
    <div className={styles.logo}>
        <img src={props.img} alt={props.alt ? props.alt : null} />
    </div>
    )


export default logo