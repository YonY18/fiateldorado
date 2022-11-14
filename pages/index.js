import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layouts/Layout'
import About from '../components/Layouts/About'
import Info from '../components/Layouts/Info'
import Contacto from '../components/Layouts/Contacto'

export default function Home() {
  return (
    <Layout inicio={true}>
      <About/>
      <Info/>
      <Contacto/>
    
    </Layout>
  )
}
