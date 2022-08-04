import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
//import CardList from "./components/Card"
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

import single from '../src/assets/single.png'
import double from '../src/assets/double.png'
import triple from '../src/assets/triple.png'



function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      
      <div className="md:grid md:grid-cols-3">
        <Cards
          img = {single}
          user = "Single User"
          price = "$149"
          storage = '500 GB Storage'
          granted = '1 Granted User'
          send = 'Send up to 2 GB'
        />
        <Cards
          img={double}
          user = "double User"
          price = "$300"
          storage = '1000 GB Storage'
          granted = '2 Granted User'
          send = 'Send up to 4 GB'        
        />
        <Cards
          img = {triple} 
          user = "triple User"
          price = "$300"
          storage = '1000 GB Storage'
          granted = '2 Granted User'
          send = 'Send up to 4 GB'
        />
  
      </div>
    
      
      <Footer />

    </div>
  );
}

export default App;
