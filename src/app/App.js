import { Route, Routes } from 'react-router-dom';
import BookCard from './components/BookCard';
import Header from './components/Header';
import Error from './pages/Error';
import Main from './pages/Main';

function App() {
    return (
        <div className="content">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:id" element={<BookCard />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
