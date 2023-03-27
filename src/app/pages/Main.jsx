import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../store/books';

const Main = () => {
    const dispatch = useDispatch();
    const { books, loading, page } = useSelector((state) => state.books);
    const category = useSelector((state) => state.search.category);
    const filter = useSelector((state) => state.search.filter);

    useEffect(() => {
        dispatch(fetchBooks(category, page, filter));
    }, [category, page, filter]);

    function loadMore() {
        dispatch(fetchBooks((page + 15)));
    }

    return (
        <>
        <div>
            <h1 className="header-main">{`Найдено ${books && books.totalItems} книг`}</h1>
            <div className="main">
                <div className="main__content container">
                    {!loading &&
                        books.items.map((book) => (
                            <Link 
                                key={book.id} 
                                to={book.id} 
                                state={{ data: book }} 
                                className="card-link"
                            >
                            <div className="card" key={book.id}>
                                <div className="card__image">
                                    <img  
                                        src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} 
                                        alt={book.volumeInfo.title} 
                                    />
                                </div>
                                <div className="card-description">
                                    <p>{book.volumeInfo.categories}</p>
                                    <h3 
                                        className="card__title"
                                    >
                                        {book.volumeInfo.title}
                                    </h3>
                                    <p>{book.volumeInfo.authors}</p>
                                </div>
                            </div>
                            </Link>
                        ))}
                </div>
            </div>
            {books && <button onClick={loadMore} className="download">показать еще</button>}
            </div>
        </>
    );
};

export default Main;
