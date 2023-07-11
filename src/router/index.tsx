import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IssueDetail from '../pages/IssueDetail';
import IssueList from '../pages/IssueList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/:id" element={<IssueDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
