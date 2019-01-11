import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import rootReducer from './reducers';

// Components
import Container from './components/Container';
import Card from './components/Card';

// Containers
import LoanForm from './containers/LoanForm';
import ResultTable from './containers/ResultTable';

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
};

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
`;

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <>
    <Normalize />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Container>
        <Card title="Loan Calculator">
          <LoanForm />
          <ResultTable />
        </Card>
      </Container>
    </ThemeProvider>
  </>
);

export default App;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
