import styles from "./CaixasContato.module.css"


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
                <h1 className={styles.titulo}> Oficina </h1>
                <p> {TXT_OFICINA} </p>
                <div className={styles.fones}>
                    {FONE_OFICINA}
                </div>

            </div>

            <div className={styles.elemento}>
                <h1 className={styles.titulo}> Vendas </h1>
                <p> {TXT_VENDAS} </p>
                <div className={styles.fones}>
                    {FONE_VENDAS}
                </div>
            </div>

            <div className={styles.elemento}>
                <h1 className={styles.titulo}> Financeiro </h1>
                <p> {TXT_FINANCEIRO} </p>
                <div className={styles.fones}>
                    {FONE_FINANCEIRO}
                </div>
            </div>
        </div>
    )
}

export default CaixasContato