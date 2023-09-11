import HeaderMain from "../components/commons/header/HeaderMain"
import WhatsappBtn from '../components/commons/whatsapp-btn/WhatsappBtn'
import Funcionario from "../components/equipe/Funcionario"

import styles from "./equipe.module.css"


function equipe(){
    return(
        <div>
            <HeaderMain/>
            <div>

                <div className={styles.quadroFuncionarios}>

                    <div>
                        <Funcionario/>
                    </div>

                    <div>
                        <Funcionario/>
                    </div>

                    <div>
                        <Funcionario/>
                    </div>

                    <div>
                        <Funcionario/>
                    </div>

                    <div>
                        <Funcionario/>
                    </div>

                    <div>
                        <Funcionario/>
                    </div>

                    <div>
                        <Funcionario/>
                    </div>

                    <div>
                        <Funcionario/>
                    </div>

                    <div>
                        <Funcionario/>
                    </div>

                    <div>
                        <Funcionario/>
                    </div>

                </div>
                
            </div>
            <WhatsappBtn/>
        </div>
    
    )
}

export default equipe