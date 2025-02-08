import styles from './Tecnologias.module.css'
import TecnologiaImg1 from '../../../assets/TecnologiaImg1_teste.webp'
import TecnologiaImg2 from '../../../assets/Impressoras 3D Anycubic 6Ks e 4Ks.webp';
import { FaCaretDown, FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const tecnologias = [
  { id: 1, title: 'Fresadora CEREC', vermais: 'Ver Mais', /*image: [TecnologiaImg1],*/ description: 'Fresadora para cerâmica e zircônia, proporcionando próteses detalhadas com alta precisão em menor tempo.', alt: 'foto da tecnologia tal' },
  { id: 2, title: 'Impressoras 3D Anycubic 6Ks e 4Ks', vermais: 'Ver Mais', /*image: [TecnologiaImg2],*/ description: 'Impressoras de alta resolução para modelos e guias, otimizando o ajuste e a qualidade das próteses.', alt: 'foto da tecnologia tal' }
];
export function Tecnologias() {
  const boxRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(boxRef.current, { duration: 1, y: 0, opacity: 1, delay: 0.05 });
        } else {
          gsap.to(boxRef.current, { duration: 1, y: 10, opacity: 0.1 });
        }
      });
    }, { threshold: 0.2 }); 
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
        <section className={styles.tecnologias} id="tecnologias" ref={boxRef}>
                <div className={styles.left_tecnologias}>
                 <h2>Tecnologias</h2>
                  <article className={styles.tecnologias_container}>
                    <div className={styles.tecnologias_description}>
                    <div id={styles.tecnologias_img_481}><img src={TecnologiaImg1} alt="" /></div>
                      <p>Nós, do Laboratório NS, temos tecnologia de ponta para criar próteses dentárias que transformam sorrisos. Combinamos precisão técnica e materiais de alta qualidade para garantir próteses confortáveis e esteticamente perfeitas. Confie em nós para transformar seu sorriso com o que há de mais avançado em odontologia protética.
                      </p>
                  <div className={styles.tecnologias_slider}>
                    <div className="button-prev-slide">
                        <FaCircleArrowLeft title='Anterior'/>
                    </div>
                      <Swiper
                        slidesPerView={2}
                        spaceBetween={25}
                        freeMode={true}
                        loop={true}
                        breakpoints={{
                          1921: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                          },
                          1550: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                          },
                          1441: {
                            slidesPerView: 1,
                          },
                          1200: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 1,
                          },
                          760: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          481: {
                            slidesPerView: 1,
                          },
                          320: {
                            slidesPerView: 1,
                          }
                        }}
                        navigation={{ nextEl: '.button-next-slide', prevEl: '.button-prev-slide'}}
                        modules={[Navigation]}
                        className={styles.swiper}
                      >
                        <div className={styles.tecnologias_content}>
                        {tecnologias.map((tecnologia) => (
                        <SwiperSlide key={tecnologia.id} className={styles.tecnologia}>
                          {/*<div className={styles.tecnologia_img}>
                          <img src={tecnologia.image} loading="lazy" alt={tecnologia.alt} /></div>*/}
                          <div className={`${styles.tecnologia_title} ${tecnologia.id === 2 ? styles.tecnologia_titlealterado : ''}`}>
                          <h4>{tecnologia.title}</h4>
                          </div>
                          <div className={styles.tecnologia_description}>
                            {/*<p id={styles.mais}>{tecnologia.vermais}<FaCaretDown /></p>*/}
                            <p className={styles.tecnologia_content}>{tecnologia.description}</p> 
                          </div>
                        </SwiperSlide> 
                        ))}   
                        </div>
                      </Swiper>  
                    <div className="button-next-slide">
                        <FaCircleArrowRight title='Próximo'/>
                    </div>
                  </div>  
                    </div>  
                      <div id={styles.tecnologias_img}><img src={TecnologiaImg1} alt="" loading="lazy" /></div>
                  </article>
                </div>
        </section>
    )
}