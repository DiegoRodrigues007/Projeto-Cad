import React from 'react'
import styles from '../Footer/Footer.module.scss'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Copyright from '../Copyright';


const Footer = () => {
  return (
    <footer className={styles.container} id='contato'>
        <div className={styles.content}>
            <div className={styles.rede}>

                <a href="https://www.instagram.com/projetocad/" target='true'><FaInstagram /> </a>

                <a href="https://www.facebook.com/projetocadpoa?mibextid=ZbWKwL" target='true'><FaFacebook /></a>

                <a href="https://api.whatsapp.com/send/?phone=5512981518369&text&type=phone_number&app_absent=0" target='true'><FaWhatsapp /></a>

            </div>
            <div className={styles.endereco}>
                <h2>Contato</h2>
                <p>Endereço: Rua Sargento Ronaldo Machado 51</p>
                <p>Telefone: (51) 985233950</p>
                <p>Email: cresceraprenderesedivertir@gmail.com</p>
            </div>
        </div>
        
        <div className={styles.copy}>
            <Copyright/>
        </div>
        
    </footer>
  )
}

export default Footer