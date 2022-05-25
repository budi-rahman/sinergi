import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <Image src='/img/logo-kepri.png' alt='' width={70} height={75}/>
                <div className={styles.textContainer}>
                    <h5 className={styles.title}>SINERGI</h5>
                    <p className={styles.text}>Sistem Informasi Kejaksaan Kepri</p>
                </div>
            </div>
        </div>
    )
}

export default Header