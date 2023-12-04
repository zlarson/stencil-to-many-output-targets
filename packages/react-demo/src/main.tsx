import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {defineCustomElements, applyPolyfills} from '@workspace/react';

applyPolyfills().then(():void => {
  defineCustomElements();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)