import styles from "./servicos.module.css"
import denteProvisorio from '../../../assets/dente-provisoria-1.webp'
import modelosImpressos from '../../../assets/Impressao-3d.webp'
import metalFree from '../../../assets/metal-free-1.webp'
import protocolos from '../../../assets/Protocolo.webp'
import metaloceramica from '../../../assets/Metaloceramica.webp'
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
  { id: 1, title: 'Dente Provisório', vermais: 'Ver Mais', image: [denteProvisorio], description: 'Provisórios em materiais biocompatíveis que protegem dentes e mantêm estética e conforto até a instalação da prótese definitiva.', alt: 'foto do serviço tal' },
  { id: 2, title: 'Modelos Impressos', vermais: 'Ver Mais', image: [modelosImpressos], description: 'Modelos 3D de alta precisão, essenciais para visualização e planejamento odontológico preciso e ajuste personalizado de próteses.', alt: 'foto do serviço tal' },
  { id: 3, title: 'Metal Free', vermais: 'Ver Mais', image: [metalFree], description: 'Próteses estéticas em zircônia ou porcelana, livres de metal e biocompatíveis, ideais para uma aparência natural e menor risco alérgico.', alt: 'foto do serviço tal' },
  { id: 4, title: 'Protocolos', vermais: 'Ver Mais', image: [protocolos], description: 'Próteses fixas para reabilitações completas sobre implantes, garantindo estética e estabilidade para pacientes edêntulos.', alt: 'foto do serviço tal' },
  { id: 5, title: 'Metalocerâmica', vermais: 'Ver Mais', image: [metaloceramica], description: 'Próteses resistentes de estrutura metálica com acabamento cerâmico, perfeitas para áreas de alta carga mastigatória.', alt: 'foto do serviço tal' }
];
export function Servicos() {
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
                spaceBetween: 12,
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