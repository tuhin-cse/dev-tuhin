import {useEffect} from "react";
import {FaBars} from "react-icons/fa";
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 70) {
                document.querySelector('header.header').classList.add('sticky')
            } else {
                document.querySelector('header.header').classList.remove('sticky')
            }


        }
    }, [])

    return (
        <header className="header">
            <div className="container">
                <h2 className="title">Dev Tuhin</h2>
                <FaBars className="md:hidden mx-2" onClick={() => {
                    document.querySelector('header.header .menu').classList.toggle('open')
                }}/>
                <ul className="menu">
                    <MenuLink href="/">Home</MenuLink>
                    <MenuLink href="/#about">About</MenuLink>
                    <MenuLink>Resume</MenuLink>
                    <MenuLink>Works</MenuLink>
                    <MenuLink>Contact</MenuLink>
                </ul>
            </div>
        </header>
    )
}

export default Header

const MenuLink = ({children, href}) => {
    const router = useRouter()
    return (
        <li>
            <Link href={href || '#!'}>
                <a className={router.asPath === href ? 'active' : ''}> {children}</a>
            </Link>
        </li>
    )
}