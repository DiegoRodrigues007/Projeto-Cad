import React from 'react'
import styles from '../NossosProjetos/NossosProjetos.module.scss';;
const NossosProjetos = () => {
  return (
    <div className={styles.container} id='NossosProjetos'>
        <div className={styles.content}>
            <h1>Nossos Projetos</h1>
            <p>Através dos projetos, buscamos auxiliar no desenvolvimento individual e coletivo de cada aluno.
              Promovendo oficinas pedagógicas,  esporte, cultura e lazer com passeios fora da comunidade.  
             Além do atendimento direto, temos o indireto com assistência de cesta básica, kit higiene e vestimenta as famílias cadastradas</p>
        </div>
        <div className={styles.projetos}>
            <div className={styles.card}>
                <img src="/Assets/img/aprendendo.svg" alt="icon"/>
                <p>Aprendendo e Brincando</p>
            </div>
            <div className={styles.card}>
                <img src="/Assets/img/reforcando.svg" alt="icon"/>
                <p>Reforçando o saber</p>
            </div>
            <div className={styles.card}>
                <img src="/Assets/img/esporte.svg" alt="icon"/>
                <p>Esporte, cultura e lazer</p>
            </div>
            <div className={styles.card}>
                <img src="/Assets/img/prato-bem-feito.svg" alt="icon"/>
                <p>Prato bem feito</p>
            </div>
        </div>

        <div className={styles.ajuda}> 
          <p><strong>Pode nos ajudar?</strong> Entre em contato conosco ou clique abaixo para doar!</p>
          <a href='#doar'>Doar</a>
        </div>
    </div>
  )
}

export default NossosProjetos