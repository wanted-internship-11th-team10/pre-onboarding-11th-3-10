import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '@/components/Header';
import IssueDetail from '../pages/IssueDetail';
import IssueList from '../pages/IssueList';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/:id" element={<IssueDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
