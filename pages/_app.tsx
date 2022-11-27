import nProgress from "nprogress";
import { Router } from "next/router";
import "nprogress/nprogress.css"

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);


import '../styles/globals.scss';
import Header from '../components/header';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>  
            <Header />
            <Component {...pageProps} />
        </>
    )
}
