import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import {
  HomePage,
  AuthPage,
  ExamPage,
  AnalysisPage
} from './pages';
import AddQuestion from './pages/admin/add/question/AddQuestion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/exam/analysis/:id" element={<AnalysisPage />} />
          <Route path="/add/question" element={<AddQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
