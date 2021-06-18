import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
