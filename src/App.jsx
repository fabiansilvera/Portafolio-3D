import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience,Hero, Navbar, Tech, StarsCanvas } from './components';  // Feedbacks Works

const App = ()  => {
  return ( 
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-cover bg-no-repeat bg-center blend-mode">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          {/* <Works /> */}
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
