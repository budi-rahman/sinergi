import styles from '../../styles/Status.module.css'
import Image from 'next/image'
import Header from '../../components/Header'
import Link from 'next/link'
import Card from '../../components/PengaduanCard'
import { useEffect, useState } from 'react'
import SinergiAPi from '../../lib/api'
import cookies from '../../lib/cookies'


const Status = () => {

    const [dataPengaduan, setDataPengaduan] = useState([])
    useEffect(() => {
        const getData = async () => {
            let token = cookies.get("token")
            let id = cookies.get("id")
            let role = cookies.get("role")

            let res = await SinergiAPi.Report.GetAll({ role: role, id: id, token: token })
            let jsonRespone = await res.json()
            if (res.status !== 200) {

            } else {
                console.log(jsonRespone)
                setDataPengaduan(jsonRespone.data)
            }
        }

        getData()
    }, [])


    return (
        <>
            <Header />
            <div>
                <div className={styles.title}>
                    <Image src={'/img/Customer.png'} alt='' width={40} height={40} className={styles.pict} />
                    <div className={styles.titleText}>
                        <p className={styles.text}>PENGADUAN</p>
                        <p className={styles.text2}>Status Pengaduan</p>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    {dataPengaduan.map((value, index) => (
                        <Card value={value} key={index} />
                    ))}
                </div>
                <div className={styles.buttonContainer}>
                    <Link href='/menu/pengaduan'>
                        <button className={styles.buttonBack}>Back</button>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default Status