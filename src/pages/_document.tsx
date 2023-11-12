import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        <title>Caca Tecnologia</title>
        <meta name="description" content="Somos uma plataforma para transformar a jornada do cliente em uma experiência memorável" />
        <link rel="shortcut icon" href="/logo-header.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
