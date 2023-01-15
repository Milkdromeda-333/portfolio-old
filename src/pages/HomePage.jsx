import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro"

export default function Home() {

    return (
        <section className="home-page">
            <Navbar />
            <Hero />
            <Intro />
        </section>
    );
}