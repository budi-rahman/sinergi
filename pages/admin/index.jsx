import styles from '../../styles/Login.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import SinergiAPi from '../../lib/api'
import cookies from '../../lib/cookies'


const Login = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    const router = useRouter();

    const HandleLogin = async() => {
        let userData = {
            username : username,
            password : password
        }

        let res = await SinergiAPi.Login(userData)
        let jsonRes = await res.json()

        if (res.status != 200) {
            // lw buat error disini, tampilin error
            console.log(jsonRes)
        } else {

            cookies.save("token", jsonRes.data.token, 1)
            cookies.save("user", jsonRes.data.user, 1)
            cookies.save("id", jsonRes.data.id, 1)
            cookies.save("role", jsonRes.data.role, 1)
            router.push('/menu');
            // redirect ke home
        }
    }

    useEffect(() => {
        // check token
        const getToken = () => {
            let token = cookies.get("token")
            if (token) {
                router.push('/menu');
            }
            // if ada, redicret ke home, ga ada lw buat ke halaman login
        }

        getToken()
    }, [])

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
                        <input className={styles.formInput} onChange = {(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className={styles.formWrapper}>
                        <label className={styles.labelStyle}>Password</label>
                        <input type="password" className={styles.formInput} onChange = {(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.buttonWrapper}>
                        {/* <Link href="/menu"> */}
                            <button className={styles.buttonStyles} onClick={HandleLogin}>Submit</button> 
                        {/* </Link> */}
                        
                        <Link href="/register">
                            <button className={styles.buttonStyles}>Daftar</button>
                        </Link>
                    </div>
                    <button className={styles.buttonStyles}>Lupa Password?</button>
                </div>
        </div>
        </div>

    )
}

export default Login