import React from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
        <div className="">
            <div className="page-title">
                <h4>Make New Admin</h4>
            </div>
            <form>
                <div className="makeAdmin-form">
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="email">New Admin Email</label>
                            <input type="text" id="email" className="form-control" autoComplete="off" placeholder="Enter email" />
                        </div>
                        <div className="form-group col">
                            <input type="submit" className="brand-btn" id="submitBtn" value="Submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;