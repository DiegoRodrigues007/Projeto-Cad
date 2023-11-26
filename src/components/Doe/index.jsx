import React from 'react'
import styles from '../Doe/Doe.module.scss'
const Doe = () => {
  return (
    <section className={styles.container} id='doar'>
        <div className={styles.content}>
            <h2>Como doar?</h2>
             <p>Ajude-nos no crescimento da OSC, para se tornar um espaço cada vez melhor!
            Aceitamos ajuda de diversas formas: seja parceiro, apoiador, patrocinador, se disponibilize com trabalho voluntário, doador recorrente tanto financeiro quanto com alimentos, roupas e brinquedos.</p>
            <div className={styles.imagem}>
                <img src="/Assets/img/qrcode2.jpg" alt="" />
            </div>
           
            <p>Ninguém é grande sozinho</p>
            <div className={styles.btn}>
            <a href="#">Copiar link</a>
            </div>
            

        </div>
    </section>
  )
}

export default Doe