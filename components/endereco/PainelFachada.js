import styles from "./PainelFachada.module.css"


function PainelFachada(){
    return(
        <div>
            <div className={styles.PainelShadow}>
            <img src="/img/fachadaLoja.png" alt="ImgFachada" className={styles.ImgFachada} />
            </div>
        </div>
    )
}

export default PainelFachada