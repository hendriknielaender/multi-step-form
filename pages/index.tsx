import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from './form'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Multi Step Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Box p={4}>
        <Form />
      </Box>
    </div>
  )
}

export default Home
