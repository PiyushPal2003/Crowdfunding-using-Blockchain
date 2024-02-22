import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";

import App from './App';
import './index.css';
import { StateContextProvider } from './context';

//THIS IS OUR ROOT ELEMENT, i.e. same as index.html IN CREATE REACT APP...............................

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider activeChain={Sepolia} clientId="cc8d6ca4e63ff4c5b8c45ef1d8362eb5"> 
    <Router>

      <StateContextProvider>
        <App />
      </StateContextProvider>
      
    </Router>
  </ThirdwebProvider> 
)