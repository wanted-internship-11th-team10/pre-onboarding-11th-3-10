import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { Layout } from './components';
import { IssuesProvider } from './context/';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IssuesProvider>
      <Layout>
        <App />
      </Layout>
    </IssuesProvider>
  </React.StrictMode>,
);
