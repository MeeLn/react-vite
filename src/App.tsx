import "./App.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import HeroSection from "./components/section/hero";
import AboutSection from "./components/section/about";
import PortfolioSection from "./components/section/portfolio";
import ProjectsSection from "./components/section/projects";
import ContactSection from "./components/section/contact";
import ScrollToTop from "./components/ui/scrolltotopbutton";
import ToggleTheme from "./components/ui/togglethembutton";

function App() {
  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSection />
        <ScrollToTop />
        <ToggleTheme />
        <AboutSection />
        <PortfolioSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
