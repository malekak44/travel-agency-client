import React from 'react';
import './User.css';
import { useParams } from 'react-router-dom';
import UserNav from '../UserNav/UserNav';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';

const User = () => {
    const { action } = useParams();
    let pageContent;
    switch (action) {
        case 'book':
            pageContent = <Book />;
            break;
        case 'list':
            pageContent = <BookingList />;
            break;
        case 'review':
            pageContent = <Review />;
            break;
        default:
            pageContent = <Book />
            break;
    }

    return (
        <div>
            <UserNav />
            <div className="page-content">
                {pageContent}
            </div>
        </div>

    );
};

export default User;