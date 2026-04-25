import { ThemeProvider } from './context/ThemeContext';
import { Navbar }       from './components/Navbar';
import { Hero }         from './components/Hero';
import { About }        from './components/About';
import { VisionMission }from './components/VisionMission';
import { WhatWeDo }     from './components/WhatWeDo';
import { Achievements } from './components/Achievements';
import { Audience }     from './components/Audience';
import { SocialReach }  from './components/SocialReach';
import { Sponsorship }  from './components/Sponsorship';
import { WhySponsor }   from './components/WhySponsor';
import { Events }       from './components/Events';
import { Testimonials } from './components/Testimonials';
import { Contact }      from './components/Contact';
import { PromoSection }  from './components/PromoSection';
import { Footer }       from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PromoSection />
        <VisionMission />
        <WhatWeDo />
        <Achievements />
        <Audience />
        <SocialReach />
        <Sponsorship />
        <WhySponsor />
        <Events />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
