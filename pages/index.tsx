import Head from 'next/head';
import { Home } from '../Components';

export default function HomePage() {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='shortcut icon' href='/public/images/favicon.ico' type='image/x-icon' />
      </Head>

      <Home />
    </div>
  );
}
