import logo from './logo.svg';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default theme

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App() {
  return (
    <Authenticator>
      {({ user, signOut }) => {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Hello from V2</h1>
              <p>This is my first serverless application through AWS</p>
            </header>
            <button onClick={signOut}>Sign out</button>
          </div>
        );
      }
    }
    </Authenticator>
  )
  }
  
export default App;