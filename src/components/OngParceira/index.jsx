import React from 'react'
import Parceiros from '../Parceiros/index'
import styles from '../OngParceira/OngParceira.module.scss'
const OngParceira = () => {

    const conteudoProjeto = [

      {img:"/Assets/img/cuidado-que-mancha.svg", key:"1"},
      {img:"/Assets/img/Sol-maior.svg", key:"2"},
      {img:"/Assets/img/inf.svg", key:"3"},
      {img:"/Assets/img/sorobo.svg", key:"4"},
      {img:"/Assets/img/vivendo.png", key:"4"},
      {img:"/Assets/img/ceasa.svg", key:"4"},
        
    ];



  return (
    <div className={styles.container}>
      <h1>ONG’S Parceiras</h1>
      <div className={styles.card}>
      {conteudoProjeto.map((conteudo) => (
        <div key={conteudo.key}>
          <Parceiros img={conteudo.img}/>
        </div>
      ))}
     </div> 
    </div>
  )
}

export default OngParceira