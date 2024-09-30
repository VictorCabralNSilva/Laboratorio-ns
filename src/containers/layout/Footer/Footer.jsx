import { useState } from 'react';
import { FaEnvelope, FaClock } from 'react-icons/fa';
import { FaPhone, FaLocationDot, FaCircleChevronLeft, FaCircleChevronRight, FaInstagram } from 'react-icons/fa6';
import Logofooter from '../../../assets/Logofooter_11zon.webp'
import Logoheader from '../../../assets/Logoheader_11zon.webp'
import styles from './Footer.module.css';


const feedbacks = [
  {
    id: 1,
    name: 'Ana Paula',
    image: [Logoheader],
    text: 'Amei o atendimento, indico com toda certeza asjfdçlaskjdfçlasjfpqowieurçalsfjaçlsgdqwpoitalskdgjaçslfdjqpwoieualskgjaçslgqwoieuçal',
  },
  {
    id: 2,
    name: 'Carlos Oliveira',
    image: [Logoheader],
    text: 'Melhro impossivel. Voltarei com certeza.',
  },
  {
    id: 3,
    name: 'Maria Santos',
    image: [Logoheader],
    text: 'Trabalho maravilhoso',
  },
];


export function Footer() {

  function enviarEmail() {
    var destinatario = "danielssilveira2002@gmail.com";
    var assunto = "Marcação de consulta";
    var corpo = "Olá, estou entrando em contato para...";
    var gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(destinatario) + "&su=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(corpo);
    window.open(gmailLink, '_blank');
}



  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };


  return (
    <footer id={styles.footer}>
      <div id={styles.footer_container}>
        <div id={styles.footer_info}>
          <ul>
          <div className={styles.footer_social_li}>
            <a id={styles.footer_instagram_li} href='https://www.instagram.com/laboratorio.ns?igsh=MTJydDQ2ajRrcWliaw==' target='_blank'><FaInstagram />Instagram</a>
          </div>
            <li onClick={enviarEmail}title='Email' id={styles.email_ul}><a className={styles.links} target='_blank'><FaEnvelope /> laboratoriodeproteses.@gmail</a></li>
            <li title='Whatsapp'><a className={styles.links} href="https://wa.me/5521964380643?text=Ol%C3%A1%2C%20tudo%20bem%3F" target='_blank'><FaPhone /> 21 96438-0643</a></li>
            <li title='Horários'><a className={styles.links}><FaClock /> Seg-Sex 8:00-17:30</a></li>
            <li title='Local'><a href='https://maps.app.goo.gl/dPFKEzRmo1m5awCD8' className={styles.links} target='_blank'><FaLocationDot /> <div class="icon"><span>Rio de Janeiro (RJ) </span><span>Zona Sul</span></div></a></li>
          </ul>
        </div>

        <div className={styles.footer_social}>
            <a id={styles.footer_instagram} href='https://www.instagram.com/laboratorio.ns?igsh=MTJydDQ2ajRrcWliaw==' target='_blank'><FaInstagram />Instagram</a>
        </div>

        <div className={styles.footerFeedback}>
          <FaCircleChevronLeft onClick={prevFeedback} className={styles.arrow}  title='Comentário Anterior'/>
          <div className={styles.feedbackContainer}>
            <article
              className={`${styles.feedbackContent} ${styles[`slide${currentIndex}`]}`}
            >
              {feedbacks.map((feedback) => (
                <div key={feedback.id} className={styles.feedback}>
                 <div className={styles.imageWrapper}>
                  <img src={feedback.image} loading="lazy" alt="foto do usuário" title="foto do paciente" className={styles.feedbackImage} />
                 </div>  
                  <div className={styles.feedbackName}>
                    <h4>{feedback.name}</h4>
                  </div>
                  <p className={styles.feedbackDescription}>{feedback.text}</p>
                </div>
              ))}
            </article>
          </div>
          <FaCircleChevronRight onClick={nextFeedback} className={styles.arrow} title='Próximo Comentário' />
        </div>

        <div id={styles.footer_logo}><img src={Logofooter} loading="lazy" alt="imagem logo" title="Laboratório NS" /></div>
      </div>
    </footer>
  )
}