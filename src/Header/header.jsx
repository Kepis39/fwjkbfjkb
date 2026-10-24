import classes from './header.module.scss'
import { Link } from "react-router-dom"
import {Photo} from '../Photo.js'
export default function Pag1_section1() {
  return (
    <>
    <header>
            <nav>
               <ul>
            <li><Link to="/">О магазине</Link></li>
            <li><Link>Доставка и оплата</Link><Link className={classes.slovo}>Доступна рассрочка</Link></li>
            <li><Link>Тест-драйв</Link></li>
            <li><Link>Блог</Link></li>
            <li><Link>Контакты</Link></li>
            <li><Link>Акции</Link><img src={Photo.Groufwf}/></li>
               </ul>
            </nav>
        </header>
    </>
  )
}