import React from "react"

import styles from "./featuredSpeakers.module.css"

const featuredSpeakers = (props) => (
    <div className={styles.featuredSpeakers}>
        <h1>{props.currentSectionData.textH1}</h1>
        <div className={styles.cardsSection}>
            {props.currentSectionData.speakersCards.map(card => (
                <div key={card.id} className={styles.singleCard}>
                    <img src={card.imgPath} alt={card.imgAlt ? card.imgAlt : null} />
                    <div className={styles.singleCardText}>
                        <h2>{card.speaker}</h2>
                        <div className={styles.position}>{card.position}</div>
                        <div className={styles.company}>{card.company}</div>
                        <div className={styles.speakerBio}>{card.speakerBio}</div>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
)

export default featuredSpeakers