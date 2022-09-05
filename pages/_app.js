import '../styles/app.scss'
import Head from "next/head";

const App = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Dev Tuhin - Fullstack Developer</title>
            </Head>
            {Array.from(new Array(15)).map((_, index) => (
                <span className="firefly" key={index}/>
            ))}
            <Component {...pageProps}/>
        </>
    )
}
export default App