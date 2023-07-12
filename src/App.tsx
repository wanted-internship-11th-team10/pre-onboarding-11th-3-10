import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IssuesProvider } from './context/issuesContext';
import HeaderLayout from './layout/HeaderLayout';
import { Detail, Issues } from './pages';

function App() {
  return (
    <BrowserRouter>
      <IssuesProvider>
        <HeaderLayout>
          <Routes>
            <Route path="/" element={<Issues />}></Route>
            <Route path="/:id" element={<Detail />}></Route>
          </Routes>
        </HeaderLayout>
      </IssuesProvider>
    </BrowserRouter>
  );
}

export default App;
