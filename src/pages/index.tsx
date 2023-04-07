import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Shaadi</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="bg-black text-white">
        <div>Now Gratecrash More Weddings</div>
      </main>
    </>
  )
}
