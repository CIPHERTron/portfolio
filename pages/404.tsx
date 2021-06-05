import Head from 'next/head';

export default function Error() {
  return (
    <div className='container'>
      <Head>
        <title>Page not found</title>
        <link rel='shortcut icon' href='/public/images/favicon.ico' type='image/x-icon' />
      </Head>

      <main>
        <h1 className='title'>Oops! The page you're looking for doesn't exist!</h1>
      </main>
    </div>
  );
}
