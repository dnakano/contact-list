import React from 'react';
import ErrorChecker from 'Components/ErrorChecker';
import Spinner from 'Components/Spinner';
import HeaderContainer from './HeaderContainer';
import ContactListContainer from './ContactListContainer';

// Dynamically load ContactDialogContainer component and name it 'ContactDialogContainer' for webpackChunkName. For more info: https://webpack.js.org/guides/code-splitting/#dynamic-imports
const ContactDialogContainer = React.lazy(() => import(/* webpackChunkName: 'ContactDialogContainer' */ './ContactDialogContainer'));

// Main app component
function App() {
  return (
    <div className="apps-wrapper">
      <ErrorChecker>
        <>
          <HeaderContainer />

          <React.Suspense fallback={<Spinner />}>
            <ContactDialogContainer />
          </React.Suspense>

          <ContactListContainer />
        </>
      </ErrorChecker>
    </div>
  );
}

export default App;
