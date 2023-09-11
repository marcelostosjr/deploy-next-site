import styles from "./Funcionario.module.css"

const NOME_FUNCIONARIO = "Marcelo dos Santos Junior"
const CARGO_FUNCIONARIO = "Mecânico"

function Funcionario(){
    return(
        <div className={styles.funcionario}>
            <div>
            <img src ="./img/funcionarios/marcelo_dos_santos_junior.png" className={styles.fotoFuncionario}/>
            </div>
            <div className={styles.nomeFuncionario}>
                {NOME_FUNCIONARIO}
            </div>
            <div className={styles.cargoFuncionario}>
                {CARGO_FUNCIONARIO}
            </div>
        </div>
    )
}

export default Funcionario