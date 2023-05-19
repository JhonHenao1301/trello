import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Board from '../../components/board'

export default function Home() {
  return (
    <Layout >
      <Header />
      <Board />
    </Layout>
  )
}
