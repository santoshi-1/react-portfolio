import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
import Skills from "./sections/skills/Skills";

const App = () => {
  const { themeState } = useThemeContext();

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Theme />
    </main>
  );
};

export default App;
