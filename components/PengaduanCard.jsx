import styles from "../styles/Card.module.css"
import Link from 'next/link';

const Card = ({value}) => {
    return(
        <div className={styles.container}>
            <div className={styles.desc}>
                <p className={styles.text}>No. Pengaduan:</p>
            </div>
            <div className={styles.nomor}>
                <p className={styles.text}>{value.no_pengaduan}</p>
            </div>
            <div className={styles.buttonContainer}>
                <Link href='/menu/konten_status'>
                    <button className={styles.buttonStatus}>Dalam Proses</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
