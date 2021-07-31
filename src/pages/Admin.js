import React from 'react';
import './Admin.css';
import { useParams } from 'react-router-dom';
import VerticalNav from '../components/VerticalNav/VerticalNav';
import ManageServices from '../components/ManageServices/ManageServices';
import AddService from '../components/AddService/AddService';
import Orders from '../components/Orders/Orders';
import MakeAdmin from '../components/MakeAdmin/MakeAdmin';

const Admin = () => {
    const { action } = useParams();
    let pageContent;
    switch (action) {
        case "manage":
            pageContent = <ManageServices />
            break;
        case "add":
            pageContent = <AddService />
            break;
        case "orders":
            pageContent = <Orders />
            break;
        case "make":
            pageContent = <MakeAdmin />
            break;

        default:
            pageContent = <ManageServices />
            break;
    }
    return (
        <div>
            <VerticalNav />
            <div className="page-content">
                {pageContent}
            </div>
        </div>
    );
};

export default Admin;