import '../styles/app.scss'

const App = ({Component, pageProps}) => {
    return (
        <>
            {Array.from(new Array(15)).map((_, index) => (
                <span className="firefly" key={index}/>
            ))}
            <Component {...pageProps}/>
        </>
    )
}
export default App