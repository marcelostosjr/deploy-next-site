import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"

function Navbar(){

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
        <div className={`${scrolling ? styles.navbar.scrolling : styles.navbar}`}>
            <div>
            <a href="/"><img src="/img/valmax_logo.png" alt="Logo" className={styles.logo}/></a>
            </div>
            <div className={styles.itensNavbar}>
                <ul>
                    <li> <a href="/empresa"> Sobre Nós</a> </li>
                    <li> <a href="/equipe"> Nosso Time</a> </li>
                    <li> <a href="/produtos"> Produtos</a> </li>
                    <li> <a href="/servicos"> Serviços</a> </li>
                    <li> <a href="/contato"> Contato</a> </li>
                    <li> <a href="/endereco"> Como Chegar</a> </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar