/* eslint-disable import/extensions */
import React from 'react';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from '@clerk/clerk-react';
import MyTimer from './Pomodoro.jsx';

require('dotenv').config();

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  // eslint-disable-next-line no-throw-literal
  throw 'Missing Publishable Key';
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 1500);
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <div>
          <h1>Shed-O</h1>
          <div>
            <MyTimer />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;
