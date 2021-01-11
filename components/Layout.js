import React from 'react'
import Head from 'next/head'


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>MOVDI</title>
                <link rel='icon' href='/favicon.svg' />
                <meta name='description' content='MOVDI' />
                <meta property='og:title' content='MOVDI' />
                <meta property='og:site_name' content='MOVDI' />
                <meta property='og:description' content='WE ARE INFLUENCERS, WE ARE MOVD' />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap" rel="stylesheet"></link>
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