import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import style from '../styles/Home.module.sass';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Goodshop</title>
      </Head>
      <main>
        <div className={style.linkContainer}>
          <h1>Coupon Pages</h1>
          <div><Link href="/coupons/orbitz.com">Orbitz</Link></div>
          <div><Link href="/coupons/priceline.com">Priceline</Link></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
