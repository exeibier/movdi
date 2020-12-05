import React from 'react'
import Head from 'next/head'
const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>2212</title>
                <link rel='icon' href='/assets/ojo.png' />
                <meta name='description' content='2212 westside pruduction house' />
                <meta property='og:title' content='2212' />
                <meta property='og:site_name' content='2212' />
            </Head>

            <div>
                {children}
            </div>
        </>
    )
}

export default Layout