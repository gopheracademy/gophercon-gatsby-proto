import React from "react"
import { navigate } from "gatsby"

import styles from "./textBlockBtn.module.css"

const mainBanner = ( props ) => (
    <div className={styles.textBlockBtn}
        style={props.currentSectionData.backgroundColor ? {backgroundColor: props.currentSectionData.backgroundColor} : null}>
        <h1>{props.currentSectionData.textH1}</h1>
        <p>{props.currentSectionData.textP}</p>
        <div className={styles.button}
             onClick={event => navigate(props.currentSectionData.btnLinkTo)}
             aria-hidden="true"
        >
            {props.currentSectionData.btnText}
        </div>
    </div>
)

export default mainBanner