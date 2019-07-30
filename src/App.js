import React from 'react';
import { Reset } from 'styled-reset';

import { GlobalStyle } from './components/GlobalStyle.js'

import Header from './components/Header';
import Summary from './components/Summary';
import Instruction from './components/Instruction';
import About from './components/About';
import Info from './components/Info';
import Footer from './components/Footer';
import { SummaryText } from './components/Text';
import { AboutText } from './components/Text';
import { InfoText } from './components/Text';


function App() {

  return (

    <React.Fragment>
      <Reset />

        <Header id="header" />

        <Summary id="summary" summaryText={SummaryText} />

        <Instruction id="instruction"/>

        <About id="about" aboutText={AboutText} />
        
        <Info id="info" infoText={InfoText} />

        <Footer id="contact" />

      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
