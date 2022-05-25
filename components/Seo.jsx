import Head from "next/head";

export default function Seo() {
    return (
        <Head>
            <title>SINERGI</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <link rel='manifest' href='/manifest.json' />
            {/* semua link sama namanya lw ganti bud, yang didalem konten */}
            <meta name="og:title" content="pwa" /> 
            <meta name="og:description" content="" />
            {/* <meta property="og:image" content="https://mangamee.vercel.app/icons/cover.png" /> */}
            <meta name="twitter:title" content="pwa" />
            <meta name="twitter:description" content="" />
            {/* <meta property="twitter:image" content="https://mangamee.vercel.app/icons/cover.png" /> */}

        </Head>
    )
}
