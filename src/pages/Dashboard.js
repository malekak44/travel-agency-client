import React from 'react';
import Admin from '../components/Admin/Admin';
import User from '../components/User/User';

const Dashboard = () => {
    const url = window.location.href;
    if (url.includes('dashboard')) {
        document.body.style.background = "#F3F5F9";
    }

    var user = 0;
    var content;
    if (user === 1) {
        content = <Admin />
    } else {
        content = <User />
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default Dashboard;