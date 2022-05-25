import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import Header from '../components/Header'
import Link from 'next/link'

const Menu = () => {

    // ini tampilan, meu yang user biasa sama bukan yang mana ya ?

    
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <Link href='/menu/pengaduan'>
                    <div className={styles.menuContainer}>
                        <Image src={'/img/Customer.png'} alt='' width={95} height={95}/>
                        <p className={styles.text}>Pengaduan</p>
                    </div>
                </Link>

                <div className={styles.menuContainer}>
                    <Image src={'/img/presentation.png'} alt='' width={95} height={95}/>
                    <p className={styles.text}>Penyuluhan Hukum</p>
                </div>
                <div className={styles.menuContainer}>
                    <Image src={'/img/symbole.png'} alt='' width={95} height={95}/>
                    <p className={styles.text}>Berita Terkini</p>
                </div>
                <div className={styles.menuContainer}>
                    <Image src={'/img/lifestyle.png'} alt='' width={95} height={95}/>
                    <p className={styles.text}>Tentang Saya</p>
                </div>
            </div>
        </>
    )
}

export default Menu