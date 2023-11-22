import React from 'react'
import styles  from '../EmpresParceira/EmpresaParceira.module.scss'
import Parceiros from '../Parceiros/index'  
const EmpresaParceira = () => {


    const conteudoProjeto = [

        {img:"/Assets/img/em-toucas.svg", key:"1"},
        {img:"/Assets/img/em-vidracaria.svg", key:"2"},
        {img:"/Assets/img/em-atletico.svg", key:"3"},
        {img:"/Assets/img/em-quentinhas.svg", key:"4"},
        {img:"/Assets/img/em-amigos.svg", key:"4"},
        {img:"/Assets/img/em-wa.svg", key:"4"},
          
      ];

  return (

    <div  className={styles.container}>
        <h1>EmpresaParceira</h1>
        <div>
            <div className={styles.card}>
            {conteudoProjeto.map((conteudo) => (
                <div key={conteudo.key}>
                <Parceiros img={conteudo.img}/>
                </div>
            ))}
        </div> 
        </div>
    </div>
  )
}

export default EmpresaParceira