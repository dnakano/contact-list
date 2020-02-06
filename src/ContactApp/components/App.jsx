import React from 'react';
import ErrorBoundary from 'Components/ErrorBoundary';
import Spinner from 'Components/Spinner';
import HeaderContainer from './HeaderContainer';
import ContactListContainer from './ContactListContainer';

// Dynamically load DialogBoxContainer component and name it 'DialogBoxContainer' for webpackChunkName. For more info: https://webpack.js.org/guides/code-splitting/#dynamic-imports
const DialogBoxContainer = React.lazy(() => import(/* webpackChunkName: 'DialogBoxContainer' */ './DialogBoxContainer'));

// Main app component
function App() {
  return (
    <div className="app-wrapper">
      <React.StrictMode>
        <ErrorBoundary>

          <HeaderContainer />

          <React.Suspense fallback={<Spinner />}>
            <DialogBoxContainer />
          </React.Suspense>

          <ContactListContainer />

        </ErrorBoundary>
      </React.StrictMode>
    </div>
  );
}

export default App;
