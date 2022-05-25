import styles from '../../styles/Konten.module.css'
import Image from 'next/image'
import Header from '../../components/Header'
import Link from 'next/link'
import Card from '../../components/PengaduanCard'

const Konten = () => {
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Image src={'/img/Customer.png'} alt='' width={40} height={40} className={styles.pict}/>
                        <div className={styles.titleText}>
                            <p className={styles.text}>PENGADUAN</p>
                            <p className={styles.text2}>Status Pengaduan</p>
                        </div>
                </div>
                <Card/>
                <div className={styles.textContainer}>
                    <p  className={styles.text2}>Silahkan mendatangai Kejaksaan Tinggi KEPRI untuk mengetahui kasus anda lebih lanjut</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Link href='/menu/status_pengaduan'>
                        <button className={styles.buttonBack}>Back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Konten