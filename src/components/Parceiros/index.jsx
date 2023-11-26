import React from 'react'
import styles from '../Parceiros/Parceiros.module.scss'
const Parceiros = (props) => {
  return (

    <div className={styles.container} id='Parceiros'>
      <div>
          <img src={props.img}/>
      </div>
    </div>
  )
}

export default Parceiros