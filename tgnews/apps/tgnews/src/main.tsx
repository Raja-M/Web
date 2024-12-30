import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { ThemeProvider } from  "@mui/material/styles";
import { theme } from  "apps/tgnews/src/app/components/common/Theme"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
    
  </StrictMode>
);
