import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import Logoheader from '../../../assets/Logoheader_11zon.webp';
import styles from './Header.module.css';
import { FaAngleRight, FaBriefcase, FaGears, FaHouse, FaUsers } from 'react-icons/fa6';

export function Header() {
    
    const [activeLink, setActiveLink] = useState('inicio');

    const handleClick = (id) => {
        setActiveLink(id);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'servicos', 'tecnologias', 'quemsomos'];
            let currentSection = '';

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    const scrollPosition = window.scrollY + window.innerHeight / 3;

                    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                        currentSection = sectionId;
                    }
                }
            });

            if (currentSection !== activeLink) {
                setActiveLink(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeLink]);

    const [isOpen, setIsOpen] = useState(false);

    const handleSide = () => {
        setIsOpen(!isOpen);
    };

    const [navOpen, setNavOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const handleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) &&
            buttonRef.current && !buttonRef.current.contains(event.target)) {
            setNavOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 25) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.top_header} ${isOpen ? styles._open : ''} ${isSticky ? styles.sticky : ''}`}>
        <nav className={navOpen ? `${styles.nav_header} ${styles._navOpen}` : styles.nav_header}>
                <div className={styles.logo}>
                    <a href="#">
                        <img className={styles.logo_img} src={Logoheader} alt="imagem logo" title="Laboratório NS" loading="lazy"/>
                    </a>  
                </div>
              
                <div id={styles.menu_btn} onClick={handleNav} ref={buttonRef}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <ul className={styles.menu} ref={menuRef}>
                    <li title='Início'>
                        <Link to="inicio" spy={true} smooth={true} offset={-230} duration={250} onClick={() => handleClick('inicio')} className={activeLink === 'inicio' ? styles.clicado : styles.btn}
                        >
                            <FaHouse />
                            <span className={styles.item_description}>Início</span>
                        </Link>
                    </li>
                    <li title='Serviços'>
                        <Link to="servicos" spy={true} smooth={true} offset={-120} duration={250} onClick={() => handleClick('servicos')} className={activeLink === 'servicos' ? styles.clicado : styles.btn}
                        >
                            <FaBriefcase />
                            <span className={styles.item_description}>Serviços</span>
                        </Link>
                    </li>
                    <li title='Tencologias'>
                        <Link to="tecnologias" spy={true} smooth={true} offset={-120} duration={250} onClick={() => handleClick('tecnologias')} className={activeLink === 'tecnologias' ? styles.clicado : styles.btn}
                        >
                            <FaGears />
                            <span className={styles.item_description}>Tecnologias</span>
                        </Link>
                    </li>
                    <li title='Quem Somos'>
                        <Link to="quemsomos" spy={true} smooth={true} offset={-120} duration={250} delay={0} onClick={() => handleClick('quemsomos')} className={activeLink === 'quemsomos' ? styles.clicado : styles.btn}
                        >
                            <FaUsers />
                            <span className={styles.item_description}>Quem somos?</span>
                        </Link>
                    </li>
                </ul>
                <div id={styles.open_btn} onClick={handleSide}>
                    <FaAngleRight />
                </div>
                <div id={styles.background_nav}></div>
            </nav>
        </header>
    );
}