import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Manuel</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          
        <h1>Manuel Rivas H1</h1>

        </div>

       

        <div className={styles.grid}>
          <a
            href="/about"
            className={styles.card}            
            rel="noopener noreferrer"
          >
            <h2>
              ir al about <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          
          
        </div>
      </main>
    </>
  )
}
