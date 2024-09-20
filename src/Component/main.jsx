import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import DailyRewardContextProvider from './components/context/DailyRewardContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DailyRewardContextProvider>
      <App />
    </DailyRewardContextProvider>
  </StrictMode>
);
