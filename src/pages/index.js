import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex bg-red-500 w-screen h-screen justify-center'>
    <div className='flex center items-center'>
    <Head>
      <title>Atari Game Pass</title>
      <meta name='description' />

    </Head>
    <button className='bg-blue-500 px-8 py-3'><Link href="/home">START</Link></button>
    </div>
    </div>
  )
}
