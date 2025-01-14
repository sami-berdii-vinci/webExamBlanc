import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Link } from './types';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import BookPage from './pages/BookPage';

const App = () => {
  const links: Link[] = [
    { name: 'Home', url: '/' },
    { name: 'Library', url: '/library' },
  ]

  const student = 'Thimoté Fétu';

  return (
    <Router>
      <Routes>
        <Route element={<Layout links={links} student={student} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App