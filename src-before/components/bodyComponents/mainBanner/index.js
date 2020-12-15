import React from "react"

import styles from "./mainBanner.module.css"

const mainBanner = ( props ) => (
    <div className={styles.mainBanner}
        style={props.currentSectionData.backgroundColor
            ? {backgroundColor: props.currentSectionData.backgroundColor}
            : null}>
        <h1>{props.currentSectionData.textH1}</h1>
        <img src={props.currentSectionData.imgPath}
             alt={props.currentSectionData.imgAlt ? props.currentSectionData.imgAlt : null} />
    </div>
)


export default mainBanner