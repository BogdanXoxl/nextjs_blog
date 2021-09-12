import Head from "next/head";
import Header from "../Header";
import {Container} from "./Layout.styles";


export default function Layout({title, description, children}){
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;500;700&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            {children}
        </>
    );
};