import Head from 'next/head'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Shaadi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <Nav />
      </main>
    </>
  )
}
