import React from "react"

import styles from "./purchase.module.css"

const purchase = (props) => (
        <div className={styles.purchaseMain}>
            <h1>I can't keep your reservation forever - hurry up! ;)</h1>
            <div className={styles.items}>
            {props.currentSectionData.ticketSalesOpen ?
                props.currentSectionData.ticketTypes.map(ticket => (
                    <div key={ticket.id} className={styles.item}>
                        <div className={styles.ticketName}>{ticket.ticketName}</div>
                        {ticket.ticketType === "purchase" ?
                            <>
                                <div className={styles.price}>{new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(ticket.price)}</div>
                                <button className={styles.buyNow} onClick={() =>
                                    alert('Passing the following data:\nItem Id:' +
                                        ticket.id + '\nItem Name:' + ticket.ticketName +
                                        '\nPrice:' + ticket.price)}>
                                    Buy Now
                                </button>
                            </>
                            :
                            <>
                                <div className={styles.price}>No value</div>
                                <button className={styles.buyNow}
                                    onClick={() =>
                                        alert('Passing the following data:\nItem Id:' +
                                            ticket.id + '\nItem Name:' + ticket.ticketName +
                                            '\nPrice:' + ticket.price)}>
                                    Redeem
                                </button>
                            </>
                        }
                    </div>
                ))
                : <div>We will start selling tickets very soon. Come back in mid-January to reserve your spot!</div>
            }
            </div>
        </div>
    )


export default purchase