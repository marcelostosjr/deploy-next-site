import HeaderMain from "../components/commons/header/HeaderMain"
import PainelTitulo from "../components/commons/painel/PainelTitulo"
import WhatsappBtn from '../components/commons/whatsapp-btn/WhatsappBtn'
import CaixasContato from "../components/contato/CaixasContato"

import styles from "./contato.module.css"

function contato(){
    return(
        <div className={styles.body}>

            <div className={styles.top}>
            <HeaderMain/>

            </div>

            <PainelTitulo/>



            <div className={styles.container}>
                <CaixasContato/>
            </div>

            <WhatsappBtn/>

        </div>
    )
}

export default contato