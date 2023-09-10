import React from "react"
import Nav from 'react-bootstrap/Nav';
import styles from "./WhatsappBtn.module.css"

const API_WHATSAPP_URL = "https://wa.me/"
const WhatsappFone = "556298532469"
const FullURL = '${API_WHATSAPP_URL}${WhatsappFone}'



function WhatsappBtn(){
    return(
        <div className = {styles.WhatsappBottom}>
            <Nav.Link href= "https://wa.me/556298532469" target="_blank">
            <div className = {styles.WhatsappShadow}>
            <img src="/img/whatsapp_icon.svg" alt="Whatsapplogo" className={styles.WhatsappIcon} />

            </div>

            </Nav.Link>

        </div>
    )
}

export default WhatsappBtn