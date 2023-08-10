import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../styles/global';
import defaultTheme from '../../styles/themes/default';

import Routes from '../../Routes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Routes />

      </ThemeProvider>
    </BrowserRouter>
  );
}
