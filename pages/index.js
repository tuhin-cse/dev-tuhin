import Header from "../components/common/header";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Skills from "../components/home/skills";
import Works from "../components/home/works";
import Contact from "../components/home/contact";
import Footer from "../components/common/footer";

const Home = () => {
  return (
      <>
          <Header/>
          <Hero/>
          <Skills/>
          <Works/>
          <Contact/>
          <Footer/>
      </>
  )
}
export default Home