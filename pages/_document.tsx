import { Html, Head, NextScript, Main } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='es'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Poppins:wght@400;500;600;700&family=Shadows+Into+Light&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document