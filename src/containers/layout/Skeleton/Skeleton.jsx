import { FaImage } from 'react-icons/fa6'
import styles from './Skeleton.module.css'

export function Skeleton() {
    return(
    <section id={styles.body_skeleton}>
    <header id={styles.header_skeleton}>
        <div id={styles.logo_skeleton}></div>
        <ul id={styles.nav_skeleton}>
            <li className={styles.nav_li}></li>
            <li className={styles.nav_li}></li>
            <li className={styles.nav_li}></li>
            <li className={styles.nav_li}></li>
        </ul>
    </header>
    <main id={styles.main_skeleton}>
        <div id={styles.left_skeleton}>
            <ul id={styles.first_ul}>
                <li className={styles.firsts_li}></li>
                <li className={styles.firsts_li}></li>
                <li className={styles.firsts_li}></li>
            </ul>
            <div id={styles.right_skeleton_767}><FaImage/></div>
            <ul id={styles.second_ul}>
                <li className={styles.second_li}></li>
                <li className={styles.second_li}></li>
                <li className={styles.second_li}></li>
                <li className={styles.second_li}></li>
                <li className={styles.second_li}></li>
            </ul>
            <p id={styles.button_skeleton}></p>
            <ul id={styles.third_ul}>
                <li className={styles.third_li}>
                    
                    <div className={styles.third_icon}></div>
                    <div className={styles.third_paragraphs}>
                    <p className={styles.third_p}></p>
                    <p className={styles.third_p}></p>
                    </div>
                </li>
                <li className={styles.third_li}>
                    <div className={styles.third_icon}></div>
                    <div className={styles.third_paragraphs}>
                    <p className={styles.third_p}></p>
                    <p className={styles.third_p}></p>
                    </div>
                </li>
            </ul>
        </div>
        <div id={styles.right_skeleton}><FaImage/></div>
    </main>
    </section>
)}