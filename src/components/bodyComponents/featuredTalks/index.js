import React from "react"

import styles from "./featuredTalks.module.css"

const featuredTalks = (props) => (
    <div className={styles.featuredTalks}>
        <h1>{props.currentSectionData.textH1}</h1>
        <div className={styles.cardsSection}>
            {props.currentSectionData.talksCards.map(card => (
                <div key={card.id} className={styles.singleCard}>
                    <img src={card.imgPath} alt={card.imgAlt ? card.imgAlt : null} />
                    <div className={styles.singleCardText}>
                        <h2>{card.topic}</h2>
                        <div className={styles.author}>{card.author}</div>
                        <div className={styles.position}>{card.position} @ {card.company}</div>
                        <p>{card.brief}</p>
                        <div className={styles.moreDetails}>More details</div>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
)

export default featuredTalks