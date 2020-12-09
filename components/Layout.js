import React from 'react'
import Head from 'next/head'


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>MOVDI</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='MOVDI' />
                <meta property='og:title' content='MOVDI' />
                <meta property='og:site_name' content='MOVDI' />
                <meta property='og:description' content='WE ARE INFLUENCERS, WE ARE MOVD' />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap" rel="stylesheet"></link>
                <link rel="shortcut icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="public/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"></meta>
                <link rel="preload" href="/public/fonts/agrandir-grandheavy-webfont.woff" as="font" crossOrigin=""/>
                <link rel="preload" href="/public/fonts/agrandir-grandheavy-webfont.woff2" as="font" crossOrigin=""/>
                <link rel="preload" href="/public/fonts/agrandir-grandheavy-webfont.ttf" as="font" crossOrigin=""/>
                <link rel="preload" href="/public/fonts/agrandir-grandheavy-webfont.svg#agrandirgrand_heavy" as="font" crossOrigin=""/>
            </Head>

            <div>
                {children}
            </div>
        </>
    )
}

export default Layout