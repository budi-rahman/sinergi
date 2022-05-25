import styles from '../../styles/Pengaduan.module.css'
import Image from 'next/image'
import Header from '../../components/Header'
import Link from 'next/link'

const Pengaduan = () => {
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.title}>
                <Image src={'/img/Customer.png'} alt='' width={40} height={40} className={styles.pict}/>
                    <p className={styles.text}>PENGADUAN</p>
                </div>
                <div className={styles.createReport}>
                        <Image src={'/img/Customer.png'} alt='' width={60} height={60} className={styles.pict}/>
                        <div className={styles.submit}>
                            <p className={styles.text}>Laporan Pengaduan</p>
                            <Link href='/menu/submit_laporan'>
                                <button className={styles.createButton}>Submit</button>
                            </Link>
                        </div>
                </div>
                <div className={styles.report}>
                        <Image src={'/img/images.png'} alt='' width={60} height={60} className={styles.pict}/>
                        <div className={styles.submit}>
                            <p className={styles.text}>Status Laporan Pengaduan</p>
                            <Link href='/menu/status_pengaduan'>
                                <button className={styles.createButton}>Submit</button>
                            </Link>
                        </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link href='/menu'>
                        <button className={styles.backButton}>Back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Pengaduan