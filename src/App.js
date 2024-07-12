import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainInterface from './components/MainInterface';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route path="/" exact component={LoadingScreen} />
        <Route path="/chat" component={MainInterface} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
