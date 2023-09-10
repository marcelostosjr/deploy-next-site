import HeaderMain from "../components/commons/header/HeaderMain"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../App";
import styles from './index.module.css'


function Home(){
    return(
        <div className={styles.teste}>
            <HeaderMain/>
            <App />
        </div>
    )
}

export default Home