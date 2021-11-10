import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './pages/books/Book';
import Books from './pages/books/Books';
import Create from './pages/books/Create';
import Welcome from './pages/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Welcome />} />
        <Route path='/books' exact element={<Books />} />
        <Route path='/books/create' exact element={<Create />} />
        <Route path='/books/:id' exact element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
