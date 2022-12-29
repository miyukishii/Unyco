import Articles from "../../components/Articles";
import Banner from "../../components/Banner";
import Carrousel from "../../components/Carrousel";
import Comments from "../../components/Comments";
import Contact from "../../components/Contact";
import ContactForm from "../../components/ContactForm";
import Contents from "../../components/Contents";
import Courses from "../../components/Courses";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Highlights from "../../components/Highlights";
import Lessons from "../../components/Lessons";
import Social from "../../components/Social";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Carrousel />
      <Contents />
      <Highlights />
      <Lessons />
      <ContactForm />
      <Comments />
      <Courses />
      <Articles />
      <Banner />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;