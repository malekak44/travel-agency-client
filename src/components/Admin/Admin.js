import React from 'react';
import './Admin.css';
import { useParams } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';
import ManageServices from '../ManageServices/ManageServices';
import AddService from '../AddService/AddService';
import Orders from '../Orders/Orders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

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
            <AdminNav />
            <div className="page-content">
                {pageContent}
            </div>
        </div>
    );
};

export default Admin;