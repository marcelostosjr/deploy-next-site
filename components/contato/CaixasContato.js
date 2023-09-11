import styles from "./CaixasContato.module.css"
import {AiOutlineMail, AiTwotonePhone} from 'react-icons/ai'
import { BsFillTelephoneFill, BsTools } from "react-icons/bs";


const FONE_OFICINA = "(62) 9 9667-2138"
const FONE_VENDAS = "(62) 9 9667-2138"
const FONE_FINANCEIRO = "(62) 9 9667-2138"


const TXT_OFICINA = "Procurando por: mecânica, reparos, revisão, diagnóstico ou orçamentos?"
const TXT_VENDAS = "Procurando por: compras e vendas de maquinários e implementos usados, venda de peças agricola em geral ou orçamentos?"
const TXT_FINANCEIRO = "Procurando por: pagamentos, segunda via, boletos, nota fiscal ou recibos?"


function CaixasContato(){
    return(
        <div className={styles.container}>

            <div className={styles.elemento}>
                <h1 className={styles.titulo}> <BsTools/> Oficina </h1>
                <div className={styles.texto}> 
                {TXT_OFICINA} 
                </div>
                <div className={styles.fones}>
                    <BsFillTelephoneFill/>  {FONE_OFICINA}
                </div>

            </div>

            <div className={styles.elemento}>
                <h1 className={styles.titulo}> Vendas </h1>
                <div className={styles.texto}> 
                {TXT_VENDAS} 
                </div>
                <div className={styles.fones}>
                <BsFillTelephoneFill/>  {FONE_VENDAS}
                </div>
            </div>

            <div className={styles.elemento}>
                <h1 className={styles.titulo}> Financeiro </h1>
                <div className={styles.texto}> 
                {TXT_FINANCEIRO} 
                </div>
                <div className={styles.fones}>
                <BsFillTelephoneFill/>  {FONE_FINANCEIRO}
                </div>
            </div>
        </div>
    )
}

export default CaixasContato