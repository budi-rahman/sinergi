import Header from '../../components/Header'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import SubmitPengaduan from '../../components/SubmitPengaduan'
import DetailPengaduan from '../../components/DetailPengaduan'
import SinergiAPi from '../../lib/api'
import cookies from '../../lib/cookies'


const Submit = () => {

    const [isReport, setIsReport] = useState(true)
    const [userToken, setUserToken] = useState(null)

    const [nik, setNik] = useState(null)
    const [name, setName] = useState(null)
    const [report, setReport] = useState(null)

    const [respone, setRespone] = useState([])

    const HandleSubmitPengatuan = async () => {
        let reportData = {
            nik: nik,
            name: name,
            report: report
        }


        let res = await SinergiAPi.Report.Post({ token: userToken, reportData: reportData })
        let jsonRes = await res.json()
        if (res.status != 201) {
            // lw buat error disini, tampilin error
            console.log("error")
            console.log(jsonRes)
        } else {
            console.log("berhasil")
            console.log(jsonRes)
            setIsReport(false)
            setRespone(jsonRes.data)
            // kalau berhasil apa
        }
    }

    useEffect(() => {
        // check token
        const getToken = () => {
            let token = cookies.get("token")
            // lw buat if bud, kalau ga ada token direct ke login
            setUserToken(token)
        }

        getToken()
    }, [])

    return (
        <>
            <Header />

            {isReport ? (
                <SubmitPengaduan
                    setName={setName}
                    setNik={setNik}
                    setReport={setReport}
                    HandleSubmitPengatuan={HandleSubmitPengatuan}
                />
            ) : (
                <DetailPengaduan
                    respone={respone}
                />

            )}

        </>
    )
}

export default Submit