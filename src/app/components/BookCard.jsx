import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookCard = () => {
    let { state } = useLocation();
    const [book, setBook] = useState();

    useEffect(() => {
        if (state) return setBook(state.data);
    }, []);

    return (
        <div className="book">
            <div className="book__content container">
                {book && 
                    <div>
                        <img
                            src={
                                book.volumeInfo.imageLinks.smallThumbnail !== undefined
                                    ? book.volumeInfo.imageLinks.smallThumbnail
                                    : book.volumeInfo.imageLinks.thumbnail
                            }
                            alt="book"
                        />
                        <div className="book__info">
                            <h3>{book.volumeInfo.title}</h3>
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
                }
                {!book && <div>Загрузи информацию о данных книги</div>}
            </div>
        </div>
    );
};

export default BookCard;
