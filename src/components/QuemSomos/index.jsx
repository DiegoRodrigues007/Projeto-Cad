import React from 'react'
import styles from '../QuemSomos/QuemSomos.module.scss';

const QuemSomos = () => {
  return (
    <div className={styles.container} id='QuemSomos'>
        
        <div className={styles.content}>
            <h1>Quem somos</h1>
            <p>Somos uma OSC sem fins lucrativos, desenvolvemos atividades pedagógicas, esporte, <br/>
            cultura e lazer para crianças e adolescentes em situação de vulnerabilidade social.</p>
        </div>

        <div className={styles.contentImg}>
            <img src="/Assets/img/bannerQuemSomos.png" alt="Quem somos"/>
            <p>Atual time de voluntários, incansáveis na organização, logística e realização das oficinas da OSC, juntos buscamos proporcionar a diferença na vida de cada atendido.</p>
        </div>

    </div>
  )
}

export default QuemSomos