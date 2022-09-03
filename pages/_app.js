import '../styles/app.scss'

const App = ({Component, pageProps}) => {
    return (
        <>
            <Component {...pageProps}/>
        </>
    )
}
export default App