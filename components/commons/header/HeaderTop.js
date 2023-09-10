import React, { useState, useEffect } from 'react';
import styles from "./HeaderTop.module.css"
import {AiOutlineMail, AiTwotonePhone} from 'react-icons/ai'

function HeaderTop(){

    const FONE_1 = "(61) 9 9667-2138"
    const FONE_2 = "(61) 9 9667-2138"
    const EMAIL = "valmaxmacanica@gmail.com"

    const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Adicione um ouvinte de evento de rolagem à janela
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remova o ouvinte de evento quando o componente for desmontado
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Se a rolagem for maior que 100 pixels, oculte a barra de navegação
      setScrolling(true);
    } else {
      // Caso contrário, mostre a barra de navegação
      setScrolling(false);
    }
  };


    return(
        <div className={`${scrolling ? styles.headerTop.scrolling : styles.headerTop}`}>
        <div className={styles.fones}>
            <div><AiTwotonePhone/>{FONE_1}</div>
            <div><AiTwotonePhone/>{FONE_2}</div>
        </div>
        <div className={styles.email}>
        <AiOutlineMail/>{EMAIL}
        </div>
        </div>

    )
}

export default HeaderTop