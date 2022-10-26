import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Js App</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold">Harshal Walunj</h1>
      </main>
    </div>
  );
}
