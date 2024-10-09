import styles from './Inicio.module.css'
import { FaPhone, FaLocationDot } from "react-icons/fa6"
import Logofooter from '../../../assets/Logofooter_11zon.webp'
import ImgInicio from '../../../assets/ImgInicio.jpeg'


export function Inicio() {
    
    
    return(
        <section className={styles.inicio} id="inicio">
              <div id={styles.left_inicio}>  
                <header id={styles.header_inicio}>
                    <h1>Beleza</h1>
                    <h1>Naturalidade</h1>
                    <h1>Tecnologia</h1>
                </header>
                <article id={styles.main_inicio}>
                    <div id={styles.inicio_img_481}><img src={ImgInicio} alt="" loading="lazy" /></div>
                    <p>No Laboratório NS, cada sorriso é uma obra de arte. Com tecnologia avançada e precisão, criamos próteses dentárias que transformam vidas. Confie em nós para trazer de volta a alegria de sorrir.</p>
                    <a className={styles.button_styled} target='_blank' href='https://wa.me/5521964380643?text=Ol%C3%A1%2C%20tudo%20bem%3F' title='Whatsapp'>Entre em contato</a>
                    <ul>
                        <li title='Whatsapp'><a href="https://wa.me/5521964380643?text=Ol%C3%A1%2C%20tudo%20bem%3F" target='_blank'><FaPhone /><div className={styles.icon}><span>Número telefônico: </span><span>21 96438-0643</span></div></a></li>
                        <li title='Local'><a href="https://maps.app.goo.gl/dPFKEzRmo1m5awCD8" target='_blank'><FaLocationDot /><div className={styles.icon}><span>Rio de Janeiro (RJ) </span><span>Zona Sul</span></div></a></li>
                    </ul>
                </article>
                
              </div>
                <div id={styles.inicio_img}><img src={ImgInicio} alt="" loading="lazy" /></div>
        </section>
    )
}