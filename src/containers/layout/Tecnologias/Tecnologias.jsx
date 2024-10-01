import styles from './Tecnologias.module.css'
import Logofooter from '../../../assets/Logofooter_11zon.webp'
import Logoheader from '../../../assets/Logoheader_11zon.webp'
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
  { id: 1, title: 'Protesi Dentali', vermais: 'Ver Mais', image: [Logoheader], description: 'é isso ai funcionou n sei seila pode ser talvez çlkjfaçsldfja çalskdfjaçlskdfjqpwoeiur çlaskjfpoqwieurçlaskghaçlsgh lçajsdfpoiqweuaçlskdjfçalskdf çalskfjpoqwieurçalsjfpowiaçlghal aoiewpqowigjaslçkj wioea çalskjdpqowighalk sj pwqoigjaçio aj poaiwgj jsikgja', alt: 'foto da tecnologia tal' },
  { id: 2, title: 'Ortodonzia', vermais: 'Ver Mais', image: [Logofooter], description: 'Sigillatura del canale ripulito e disinfettato', alt: 'foto da tecnologia tal' },
  { id: 3, title: 'Sbiancamento', vermais: 'Ver Mais', image: [Logoheader], description: 'Pulizia professionale con strumenti manuali', alt: 'foto da tecnologia tal' },
  { id: 4, title: 'Igiene Dentale', vermais: 'Ver Mais', image: [Logofooter], description: 'Trattamenti di igiene orale professionale.', alt: 'foto da tecnologia tal' },
  { id: 5, title: 'Igiene Dentale', vermais: 'Ver Mais', image: [Logoheader], description: 'Trattamenti di igiene orale professionale.', alt: 'foto da tecnologia tal' },
  { id: 6, title: 'Protesi Dentali', vermais: 'Ver Mais', image: [Logoheader], description: 'é isso ai funcionou n sei seila pode ser talvez', alt: 'foto da tecnologia tal' },
  { id: 7, title: 'Ortodonzia', vermais: 'Ver Mais', image: [Logofooter], description: 'Sigillatura del canale ripulito e disinfettato', alt: 'foto da tecnologia tal' },
  { id: 8, title: 'Sbiancamento', vermais: 'Ver Mais', image: [Logoheader], description: 'Pulizia professionale con strumenti manuali', alt: 'foto da tecnologia tal' },
  { id: 9, title: 'Protesi Dentali', vermais: 'Ver Mais', image: [Logoheader], description: 'é isso ai funcionou n sei seila pode ser talvez', alt: 'foto da tecnologia tal' },
  { id: 10, title: 'Sbiancamento', vermais: 'Ver Mais', image: [Logoheader], description: 'Pulizia professionale con strumenti manuali', alt: 'foto da tecnologia tal' },
  { id: 11, title: 'Ortodonzia', vermais: 'Ver Mais', image: [Logofooter], description: 'Sigillatura del canale ripulito e disinfettato', alt: 'foto da tecnologia tal' },
  { id: 12, title: 'Igiene Dentale', vermais: 'Ver Mais', image: [Logoheader], description: 'Trattamenti di igiene orale professionale.', alt: 'foto da tecnologia tal' },
];

export function Tecnologias() {
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Quando a div está visível na tela
          gsap.to(boxRef.current, { duration: 1, y: 0, opacity: 1, delay: 0 });
        } else {
          // Quando a div sai da tela
          gsap.to(boxRef.current, { duration: 1, y: 10, opacity: 0.2 });
        }
      });
    }, { threshold: 0.3 }); // Ajuste o threshold conforme necessário

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
                    <div id={styles.tecnologias_img_481}><img src={Logofooter} alt="" /></div>
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
                          1441: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                          },
                          1200: {
                            slidesPerView: 1,
                          },
                          992: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 1,
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
                          <img src={Logoheader} loading="eager" alt={tecnologia.alt} />
                          <div className={styles.tecnologia_title}>
                          <h4>{tecnologia.title}</h4>
                          </div>
                          <div className={styles.tecnologia_description}>
                            <p id={styles.mais}>{tecnologia.vermais}<FaCaretDown /></p>
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
                      <div id={styles.tecnologias_img}>foto do modelo</div>
                  </article>
                </div>
        </section>
    )
}