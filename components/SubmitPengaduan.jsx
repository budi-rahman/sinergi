import styles from '../styles/Submit.module.css'
import Image from 'next/image'


export default function SubmitPengaduan({setName, setNik, setReport, HandleSubmitPengatuan}) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Image src={'/img/Customer.png'} alt='' width={40} height={40} className={styles.pict} />
                <div className={styles.titleText}>
                    <p className={styles.text}>PENGADUAN</p>
                    <p className={styles.text2}>Laporan Pengaduan</p>
                </div>
            </div>
            <div className={styles.identity}>
                <div className={styles.identityForm}>
                    <label className={styles.text3}>Nama Pelapor</label>
                    <input className={styles.inputIdentity} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.identityForm}>
                    <label className={styles.text3}>Identitas Pelapor</label>
                    <input className={styles.inputIdentity} onChange={(e) => setNik(e.target.value)} />
                </div>
                <div className={styles.identityForm2}>
                    <label className={styles.text3}>Isi Pengaduan</label>
                    <textarea className={styles.inputIdentityText} onChange={(e) => setReport(e.target.value)} />
                </div>
            </div>
            <div className={styles.submitButton}>
                <button className={styles.submit} onClick={HandleSubmitPengatuan}>Submit</button>
            </div>
        </div>
    )
}
