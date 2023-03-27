import { Filters, Header, Main } from '@/components';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Exercises! by Stephen Rance</title>

      <meta content="Generated by create next app" name="description" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <link href="/favicon.png" rel="icon" />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/fonts/roboto-bold.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/fonts/roboto-regular.woff2"
        rel="preload"
        type="font/woff2"
      />
    </Head>

    <Header />

    <Main>
      <Filters></Filters>
    </Main>
  </>
);

export default Home;
