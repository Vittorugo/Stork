import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../../styles/globals.css'
import NavbarHome from '../components/NavBar';


function MyApp({Component, pageProps}) {


    return (
        <>
            <NavbarHome />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
