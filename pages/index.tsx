import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-[#042c19] min-h-screen">

      <Head>
        <title>Lottery System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

    </div>
  )
}

export default Home
