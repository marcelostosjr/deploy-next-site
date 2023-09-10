import HeaderMain from "../components/commons/header/HeaderMain"
import styles from "./endereco.module.css"

import PainelFachada from "../components/endereco/PainelFachada"
import DadosEndereco from "../components/endereco/DadosEndereco"
import TracarRotaBottom from "../components/endereco/TracarRotaBottom"
import Mapa from "../components/endereco/Mapa"
import GlobalStyles from "../App.module.css"

import WhatsappBtn from '../components/commons/whatsapp-btn/WhatsappBtn'

function endereco(){
    return(
        <div>
            <div className={GlobalStyles.header}>
            <HeaderMain/>
            </div>
            <div>
                <PainelFachada/>
            </div>
            <div className={styles.container}>
                <div className={styles.elemento1}>
                <DadosEndereco/>
                <TracarRotaBottom/>
                </div>
                <div className={styles.elemento2}>
                <Mapa/>
                </div>
            </div>

            <WhatsappBtn/>

        </div>

    )
}

export default endereco