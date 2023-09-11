import styles from "./PainelTitulo.module.css"

function PainelTitulo(){
    return(

        <div className={styles.PainelBase}>
            <div className={styles.PainelShadow}></div>
            <img src="/img/fachada_loja.jpg" alt="ImgFachada" className={styles.ImgFachada}/>
            <h1 className={styles.Titulo}> Contatos </h1>
        </div>

    )
}

export default PainelTitulo