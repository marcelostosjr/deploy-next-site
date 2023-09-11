import styles from "./Painel.module.css"

function Painel(){
    return(

        <div className={styles.PainelBase}>
            <div className={styles.PainelShadow}></div>
            <img src="/img/fachada_loja.jpg" alt="ImgFachada" className={styles.ImgFachada}/>
        </div>

    )
}

export default Painel