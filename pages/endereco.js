import HeaderMain from "../components/commons/header/HeaderMain"
import styles from "./endereco.module.css"


import DadosEndereco from "../components/endereco/DadosEndereco"
import TracarRotaBottom from "../components/endereco/TracarRotaBottom"
import Mapa from "../components/endereco/Mapa"
import Painel from "../components/endereco/Painel"


import WhatsappBtn from '../components/commons/whatsapp-btn/WhatsappBtn'

function endereco(){
    return(
        <div className={styles.body}>

            <div className={styles.top}>
            <HeaderMain/>

            </div>

            <Painel/>



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