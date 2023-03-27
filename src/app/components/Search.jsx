import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import booksService from '../service/books';
import { setCurrentSearch } from '../store/search';
import Input from './Input';

const Search = () => {
    const [books, setBooks] = useState();
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!value) return setBooks();
        const fetch = setTimeout(() => fetchSearchBooks(value), 300);
        return () => clearTimeout(fetch);
    }, [value]);

    const fetchSearchBooks = async (search) => {
        try {
            const data = await booksService.getSearchHeader(search);
            console.log(data.items);
            setBooks(data.items);
        } catch (error) {
            console.log('Error');
        }
    };


    const handleChange = (e) => {
        dispatch(setCurrentSearch(e.target.value));
        setValue(e.target.value);
    };

    return (
        <>
            <div className="search">
                <Input name="search" value={value} onChange={handleChange} />
                {books && (
                    <div className="search__result">
                        {books.map((book) => (
                            <Link
                                key={book.id}
                                to={book.id}
                                state={{ data: book }}
                                className="serch__item">
                                <div className="search__item-content">
                                    <img
                                        src={
                                            book.volumeInfo.imageLinks.smallThumbnail !== undefined
                                                ? book.volumeInfo.imageLinks.smallThumbnail
                                                : book.volumeInfo.imageLinks.thumbnail
                                        }
                                        alt="book"
                                    />
                                    <div className="search__item-info">
                                        <span>{book.volumeInfo.title}</span>
                                        <p>
                                            {book.volumeInfo.authors
                                                ? book.volumeInfo.categories
                                                : 'Категории не заданы'}
                                        </p>
                                        <p>
                                            {book.volumeInfo.authors
                                                ? book.volumeInfo.authors
                                                : ' Авторы неизвестны'}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
