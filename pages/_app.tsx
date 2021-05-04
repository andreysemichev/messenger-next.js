import Head from "next/head";
import "styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (<>
        <Head>
            <title>MyApp</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
    </>);
}

export default MyApp;
