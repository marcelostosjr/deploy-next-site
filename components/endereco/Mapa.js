import styles from "./Mapa.module.css"

function Mapa(){
    return(
        <div className={styles.elementoMapa}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135.8715509841295!2d-46.19810655680273!3d-13.951735821278644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934dd783dd046b41%3A0x6f815c697c0bdd!2sVALMAX%20COMERCIO%20E%20REPRESENTA%C3%87%C3%83O%20LTDA!5e0!3m2!1sen!2sbr!4v1694453607304!5m2!1sen!2sbr" width= "1000px" height= "500px" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

 )
}

export default Mapa