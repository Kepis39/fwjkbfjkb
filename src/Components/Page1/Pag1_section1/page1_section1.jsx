import { Photo } from '../../../Photo'
import Modal from '../Modal/modal.jsx'
import classes from '../Pag1_section1/page1_section1.module.scss'
export default function Pag1_section1() {
  return (
    <>
    <section className={classes.sect1}>
       <div className={classes.big_container}>

          <div className={classes.left_container}>
            <div className={classes.text}>
              <h1>Ремонт и обслуживание<br/> 
              товаров Kugoo Kirin</h1>
              <p>в фирменных сервисых центрах</p>
            </div>
            <div className={classes.container}>
              <div className={classes.block}>
                <div>
                <img src={Photo.Group}/>
                </div>
                <p>Гарантия 14 дней<br/>
                  на ремонт</p>
              </div>
                <div className={classes.block}>
                  <div>
                <img src={Photo.Groupfwonjf}/>
                </div>
                <p>Всегда в наличии оригинальные запчасти<br/>
                от производителя</p>
              </div>
              <div className={classes.block}>
                <div>
                <img src={Photo.Vector}/>
                </div>
                <p>Всегда в наличии оригинальные запчасти<br/>
                       от производителя</p>
              </div>
            </div>
            <button>Записаться</button>
          </div>

          <div className={classes.right_container}>
            <img src={Photo.fwfvwmkofow}/>
          </div>
       </div>
       <div className="">
        <button onClick={()=> setOpen(true)}>Записаться</button>
        {
          open &&(
            <Modal onClose={() => setOpen(false)}>
              <button onClick={()=>setOpen(false)}>закрыть</button>
            </Modal>
          )
        }
       </div>
    </section>
    </>
  )
}