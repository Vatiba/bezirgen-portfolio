import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ThemeContextProvider from "./context/theme-context";
import ActiveSectionContextProvider from "./context/active-section-context";
import Header from "./components/header";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "./components/theme-switch";
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          <main className="flex flex-col items-center">
            <Intro />
            <div className="flex flex-col items-center px-4">
              <SectionDivider />
              <Projects />
              <Skills />
              <Experience />
              <Education />
              <Contact />
            </div>
          </main>

          <Toaster position="top-right" />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
