import styles from "./servicos.module.css"
import Logoheader from '../../../assets/Logoheader_11zon.webp'
import Logofooter from '../../../assets/Logofooter_11zon.webp'
import { FaCaretDown, FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { gsap } from "gsap/gsap-core";
import { useEffect, useRef } from "react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const servicos = [
  { id: 1, title: 'Protesi Dentali', vermais: 'Ver Mais', image: [Logoheader], description: 'é isso ai funcionou n sei seila pode ser talvez çlkjfaçsldfja çalskdfjaçlskdfjqpwoeiur çlaskjfpoqwieurçlaskghaçlsgh lçajsdfpoiqweuaçlskdjfçalskdf çalskfjpoqwieurçalsjfpowiaçlghal aoiewpqowigjaslçkj wioea çalskjdpqowighalk sj pwqoigjaçio aj poaiwgj jsikgja', alt: 'foto do serviço tal' },
  { id: 2, title: 'Ortodonzia', vermais: 'Ver Mais', image: [Logofooter], description: 'Sigillatura del canale ripulito e disinfettato', alt: 'foto do serviço tal' },
  { id: 3, title: 'Sbiancamento', vermais: 'Ver Mais', image: [Logoheader], description: 'Pulizia professionale con strumenti manuali', alt: 'foto do serviço tal' },
  { id: 4, title: 'Igiene Dentale', vermais: 'Ver Mais', image: [Logofooter], description: 'Trattamenti di igiene orale professionale.', alt: 'foto do serviço tal' },
  { id: 5, title: 'Igiene Dentale', vermais: 'Ver Mais', image: [Logoheader], description: 'Trattamenti di igiene orale professionale.', alt: 'foto do serviço tal' },
  { id: 6, title: 'Protesi Dentali', vermais: 'Ver Mais', image: [Logoheader], description: 'é isso ai funcionou n sei seila pode ser talvez', alt: 'foto do serviço tal' },
  { id: 7, title: 'Ortodonzia', vermais: 'Ver Mais', image: [Logofooter], description: 'Sigillatura del canale ripulito e disinfettato', alt: 'foto do serviço tal' },
  { id: 8, title: 'Sbiancamento', vermais: 'Ver Mais', image: [Logoheader], description: 'Pulizia professionale con strumenti manuali', alt: 'foto do serviço tal' },
  { id: 9, title: 'Protesi Dentali', vermais: 'Ver Mais', image: [Logoheader], description: 'é isso ai funcionou n sei seila pode ser talvez', alt: 'foto do serviço tal' },
  { id: 10, title: 'Sbiancamento', vermais: 'Ver Mais', image: [Logoheader], description: 'Pulizia professionale con strumenti manuali', alt: 'foto do serviço tal' },
  { id: 11, title: 'Ortodonzia', vermais: 'Ver Mais', image: [Logofooter], description: 'Sigillatura del canale ripulito e disinfettato', alt: 'foto do serviço tal' },
  { id: 12, title: 'Igiene Dentale', vermais: 'Ver Mais', image: [Logoheader], description: 'Trattamenti di igiene orale professionale.', alt: 'foto do serviço tal' },
];

export function Servicos() {

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
    }, { threshold: 0.5 }); // Ajuste o threshold conforme necessário

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);
  return (
    <section className={styles.servicos} id="servicos" ref={boxRef}>
      <h2>Serviços</h2>
      <div className={styles.servico_container}>
      <div className="button-prev-service">
          <FaCircleArrowLeft title="Serviço Anterior"/>
      </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            breakpoints={{
              1920: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1600: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1441: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              481: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              }
            }}
            navigation={{ nextEl: '.button-next-service', prevEl: '.button-prev-service'}}
            modules={[Navigation]}
            className={styles.swiper}
          >
       <div className={styles.player}>
        <article className={styles.servicos_content}>
            {servicos.map((servico) => (
              <SwiperSlide key={servico.id} className={styles.servico}>
                <img src={servico.image} loading="lazy" alt={servico.alt} title="foto do paciente" className={styles.servico_img} />
                <div className={styles.servico_title}>
                  <h4>{servico.title}</h4>
                </div>
                <div className={styles.servico_description}>
                  <p id={styles.mais}>{servico.vermais}<FaCaretDown /></p>
                  <p className={styles.servico_content}>{servico.description}</p>
                </div>
              </SwiperSlide>
            ))}
         </article>
        </div>
          </Swiper>
          <div className="button-next-service">
              <FaCircleArrowRight title="Próximo Serviço"/>
          </div>
      </div>
    </section>
  )
}