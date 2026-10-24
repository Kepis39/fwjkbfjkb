import classes from '../Modal/modal.module.scss'
import { Photo } from '../../../Photo'
import { useState } from 'react'
export default function Modal({onClose, children}) {
  return (
    <>
     <div className={classes.big_container}>
      <div classes={classes.left_container}>
        <h2>Счастливые часы</h2>
        <p>Каждые выходные с 00:00 до 05:00<br/> 
        дополнительный подарок к любому<br/>
         заказу фирменный рюкзак</p>
         <button>Перейти в каталог</button>
      </div>
      <div classes={classes.right_container}>
        <img src={Photo.gift}/>
      </div>
     </div>
    </>
)
}