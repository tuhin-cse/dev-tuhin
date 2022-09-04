const Header = () => {
    return (
        <header>
            <div className="container flex justify-between items-center h-16 border-b">
                <h2 className="text-xl">Dev Tuhin</h2>
                <ul className="menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Resume</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    )
}

export default Header