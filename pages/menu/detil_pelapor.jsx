import styles from '../../styles/Detil.module.css'
import Image from 'next/image'
import Header from '../../components/Header'
import Link from 'next/link'

const Detil = () => {
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Image src={'/img/Customer.png'} alt='' width={40} height={40} className={styles.pict}/>
                    <div className={styles.titleText}>
                        <p className={styles.text}>PENGADUAN</p>
                        <p className={styles.text2}>Laporan Pengaduan</p>
                    </div>
                </div>
                <div className={styles.identity}>
                    <div className={styles.identityForm}>
                        <label className={styles.labelTitle}>Nama</label>
                        <input className={styles.formIdentity} value="Rahmat Subukti"disabled/>
                    </div>
                    <div className={styles.identityForm}>
                        <label className={styles.labelTitle}>KTP</label>
                        <input className={styles.formIdentity} value="3205040304940002" disabled/>
                    </div>
                    <div className={styles.identityForm}>
                        <label className={styles.labelTitle}>Email</label>
                        <input className={styles.formIdentity} value="rahmat@mail.com" disabled/>
                    </div>
                    <div className={styles.identityForm}>
                        <label className={styles.labelTitle}>No. Hp</label>
                        <input className={styles.formIdentity} value="082240803374" disabled/>
                    </div>
                    <div className={styles.identityForm2}>
                        <label className={styles.text3}>Isi Pengaduan</label>
                        <textarea className={styles.inputIdentityText} disabled value="Saya ingin melaporkan bahwa ayam jago milik pak RT 03 telah dicuri"/>
                    </div>
                </div>
                <div className={styles.nomor}>
                    <p>No Pengaduan : 001/ASK/22022022</p>
                </div>
                <p className={styles.info}>No Pengaduan ini telah terdaftar atas nama anda di Sistem Kejaksaan Negeri KEPRI</p>
                <div className={styles.buttonContainer}>
                    <Link href='/menu'>
                        <button className={styles.buttonBack}>Back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Detil