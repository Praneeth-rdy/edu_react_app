import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

// Importing Screens
import PrivateScreen from './screens/PrivateScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router basename="/edu_react_app">
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <PrivateRoute exact path="/private" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/forgot-password" component={ForgotPasswordScreen} />
          <Route exact path="/reset-password/:resetToken" component={ResetPasswordScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
