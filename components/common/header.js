import {useEffect, useState} from "react";
import {FaBars} from "react-icons/fa";

const Header = () => {

    const [active, setActive] = useState('body')

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 70) {
                document.querySelector('header.header').classList.add('sticky')
            } else {
                document.querySelector('header.header').classList.remove('sticky')
            }
            try {
                if(window.scrollY >= document.querySelector('#contact').offsetTop - 800) {
                    setActive('contact')
                } else if(window.scrollY >= document.querySelector('#works').offsetTop - 200) {
                    setActive('works')
                } else if(window.scrollY >= document.querySelector('#skills').offsetTop - 200) {
                    setActive('skills')
                } else {
                    setActive('body')
                }
            } catch (e) {

            }
            try {
                if (window.scrollY > 500) {
                    document.querySelector('#go-top').classList.remove('hidden')
                } else {
                    document.querySelector('#go-top').classList.add('hidden')
                }
            } catch (e) {

            }
            document.addEventListener("mousedown", handleClickOutside);
        }
    }, [])

    function handleClickOutside(event) {
        try {
            let menu = document.querySelector('header.header .menu')
            if(!menu.contains(event.target)) {
                menu.classList.remove('open')
            }
        } catch (e) {

        }
    }


    return (
        <header className="header">
            <div className="container">
                <h2 className="title">Dev Tuhin</h2>
                <FaBars className="md:hidden mx-2" onClick={() => {
                    document.querySelector('header.header .menu').classList.toggle('open')
                }}/>
                <ul className="menu">
                    <MenuLink href="body" active={active} setActive={setActive}>Home</MenuLink>
                    <MenuLink href="skills" active={active} setActive={setActive}>Skills</MenuLink>
                    <MenuLink href="works" active={active} setActive={setActive}>Works</MenuLink>
                    <MenuLink href="contact" active={active} setActive={setActive}>Contact</MenuLink>
                </ul>
            </div>
        </header>
    )
}

export default Header

const MenuLink = ({children, href, active, setActive}) => {
    return (
        <li>
            <a role="button" onClick={() => {
                if(href === 'body') {
                    window.scroll({
                        top: 0,
                        behavior: "smooth"
                    })
                } else {
                    scrollTo('#' + href)
                }
                document.querySelector('header.header .menu').classList.remove('open')
                setActive(href)
            }} className={active === href ? 'active' : ''}> {children}</a>
        </li>
    )
}


export const scrollTo = section => {
    try {
        let node = document.querySelector(section)
        window.scrollTo({
            top: node.offsetTop - 120,
            behavior: "smooth"
        })
    } catch (e) {

    }
}