
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import AboutUs from './components/AboutUs'
import Story from './components/Story';
import WhyUs from './components/WhyUs';
import Ingredients from './components/Ingredients';
import Commitment from './components/Commitment';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Navbar
      />
      <Hero/>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id='story'>
        <Story />
      </div>
      <div id='whyUs'>
        <WhyUs />
      </div>
      <div id='ingredients'>
        <Ingredients />
      </div>
      <div id='commitment'>
        <Commitment />
      </div>
      <Footer
      />
    </>
  )
}

export default App
