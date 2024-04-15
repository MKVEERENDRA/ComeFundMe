
        import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import { sepolia } from "@thirdweb-dev/chains";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThirdwebProvider
  activeChain="sepolia"

  clientId="7e17de60f665ff250b8c29e3eccbcd1e"
  desiredChainId="11155111"
>    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)
      
