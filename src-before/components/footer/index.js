import React from "react"
import { Link } from "gatsby"

import { useFooterMetadata } from "../../hooks/use-footer-metadata.js"

import styles from "./footer.module.css"

const Footer = () => {
    const {footer} = useFooterMetadata()

    return (
        <footer style={{backgroundColor: footer.backgroundColor}}>
            <div className={styles.footer}>
            <div>
                {footer.disclaimer}
            </div>
            {footer.links.map(link =>(
                <div>
                    <Link to={link.linkTo} onClick={link.onClick}>
                        {link.name}
                    </Link>
                </div>
            ))}
            </div>
        </footer>
    )

}

export default Footer