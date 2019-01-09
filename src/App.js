import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';


// Components
import Container from './components/Container';
import Card from './components/Card';

// Containers
import LoanForm from './containers/LoanForm';

// Theming
const theme = {
  color: {
    primary: '#9BC1BC',
    hoverPrimary: '#8DB0AB',
    black: '#252525',
    white: '#ffffff',
    text: '#76848f',
    background: '#ecf3fb'
  },
  fontSize: {
    heading: '1.3rem',
    button: '0.8rem'
  }
}

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 15px;
  }

  body {
    background-color: ${theme.color.background};
    min-height: 100vh;
    font-family: 'Titillium Web', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #app {
    width: 100%;
  }
`


const App = () => (
  <>
    <Normalize />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Container>
        <Card title='Loan Calculator'>
          <LoanForm />
        </Card>
      </Container>
    </ThemeProvider>
  </>
);

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
