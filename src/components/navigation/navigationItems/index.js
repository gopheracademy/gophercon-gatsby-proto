import React from "react"
import { Link } from "gatsby"

import styles from "./navigationItems.module.css"

const navigationItems = (props) => (
        <ul className={styles.navigationItems}>
            {props.linksList.map(link => (
                    <li
                        key={link.id}
                        className={styles.navigationItem}>
                        {link.sublinks.length !== 0 ?
                            <div className={styles.dropdown}>
                                    <button className={styles.dropbtn}>
                                            {link.name}
                                    </button>
                                    <ul className={styles.dropdownContents}>
                                        {link.sublinks.map(sublink => (
                                            <li key={sublink.id} className={styles.dropdownContent}>
                                                <Link to={sublink.linkTo}>
                                                    {sublink.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                            </div>
                            :
                            <Link to={link.linkTo} >{link.name}</Link>
                        }
                    </li>
                )
            )
            }
        </ul>
)

export default navigationItems