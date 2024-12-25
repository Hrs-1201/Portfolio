import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Heropage/Hero";
import Experience from "../components/Experince/Experince";
import Projects from "../components/Projects/Projects";
import About from "@/components/About/About";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
    </div>
  );
}

export default Home;

// bg-gradient-to-b from-blue-100 to-red-100
