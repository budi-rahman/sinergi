import styles from '../styles/Register.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import SinergiAPi from '../lib/api'

const Register = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)
    const [noKtp, setNoKtp] = useState(null)
    const [email, setEmail] = useState(null)
    const [noHp, setNoHp] = useState(null)

    const HandleRegister = async() => {
        //  lw buat yang validator dulu disini, abis itu masukin kesini
        // ini pake no, hp jadinya ?
        
        // buat role, ini lw bedain aja, role 1 admin, role 2 user

        let userData = {
            name: name, 
            username : username,
            email : email,
            password : password,
            nik : noKtp,
            role : 1
        }

        let res = await SinergiAPi.Register(userData)
        let JsonRes = await res.json()

        if (res.status !== 200) {
            // lw handle error disini
            console.log(JsonRes)
            console.log(res.status)
        } else {
            //  handle berhasil disini
            console.log(JsonRes)
            console.log(res.status)
        }
    }


    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                    <div className={styles.imgContainer}>
                            <Image src="/img/logo-kepri.png" alt='' width={100} height={100}/>
                            <h5 className={styles.title}>SINERGI</h5>
                            <p className={styles.text}>Sistem Informasi Kejaksana Kepri</p>
                        </div>
                    <div className={styles.formContainer}>
                        <div className={styles.formWrapper}>
                            <label className={styles.labelStyle}>Username</label>
                            <input className={styles.formInput} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.formWrapper}>
                            <label className={styles.labelStyle}>Nama</label>
                            <input className={styles.formInput} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.formWrapper}>
                            <label className={styles.labelStyle}>No KTP</label>
                            <input className={styles.formInput} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.formWrapper}>
                            <label className={styles.labelStyle}>Email</label>
                            <input className={styles.formInput} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.formWrapper}>
                            <label className={styles.labelStyle}>No HP.</label>
                            <input className={styles.formInput} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.formWrapper}>
                            <label className={styles.labelStyle}>Password</label>
                            <input type="password" className={styles.formInput} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <div className={styles.buttonWrapper}>
                            {/* <Link href="/"> */}
                                <button className={styles.buttonStyles} onClick={HandleRegister}>Submit</button> 
                            {/* </Link> */}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Register