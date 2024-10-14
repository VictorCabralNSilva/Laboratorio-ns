import styles from './QuemSomos.module.css'
import Logofooter from '../../../../public/Logofooter_11zon.webp'
import Logoheader from '../../../../public/Logoheader_11zon.webp'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
export function QuemSomos() {
  const boxRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(boxRef.current, { duration: 1, y: 0, opacity: 1, delay: 0.2 });
        } else {
          gsap.to(boxRef.current, { duration: 1, y: 10, opacity: 0.1 });
        }
      });
    }, { threshold: 0.3 }); 
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }
    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);
    return(
        <section className={styles.quemsomos} id="quemsomos" ref={boxRef}>
                <h2>Quem somos?</h2>
                <div id={styles.quemsomos_content}>
                    <article id={styles.quemsomos1}>
                      <img src={Logofooter} alt="Andre Nascimento" loading="lazy" />
                      <h4>Andre Nascimento</h4>
                      <p id={styles.quemsomos1_description}>
                        Chirurgo dentale 
                      </p>
                      <div className={styles.quemsomos_social}>
                       <ul>
                        <li className={styles.qs_insta} title='Instagram'><a href="https://www.instagram.com/andre.55/" target='_blank'><span className={styles.tooltip1}>Instagram</span><FaInstagram /></a></li>
                        <li className={styles.qs_link} title='Linkedin'><a href="https://www.linkedin.com/in/andr%C3%A9-nascimento-silva-0957aa247/" target='_blank'><span className={styles.tooltip2}>Linkedin</span><FaLinkedinIn /></a></li>
                       </ul>
                      </div>
                    </article>
                    <article id={styles.quemsomos2}>
                      <img src={Logoheader} alt="Lucas Soares" loading="lazy" />
                      <h4>Lucas Soares</h4>
                      <p id={styles.quemsomos2_description}>
                        Odontotecnico
                      </p>
                      <div className={styles.quemsomos_social}>
                       <ul>
                        <li className={styles.qs_insta} title='Instagram'><a href="https://www.instagram.com/lucasrsoares17/" target='_blank'><FaInstagram /><span className={styles.tooltip1}>Instagram</span></a></li>
                        <li className={styles.qs_link} title='Linkedin'><a href="https://www.linkedin.com/in/lucas-soares-b44291130/" target='_blank'><span className={styles.tooltip2}>Linkedin</span><FaLinkedinIn /></a></li>
                       </ul>
                      </div>
                    </article>
                </div>
        </section>
    )
}