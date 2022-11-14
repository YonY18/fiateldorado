import React from 'react'
import Header from './Header';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'

export default function Layout(props) {
  const { inicio } = props;
  return (
    <>
      <Navbar/>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FIAT</title>
        <meta name="description" content="Pagina principal de FIAT ELDORADO" />
      </Head>
      <Header inicio={inicio} />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}