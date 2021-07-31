import React from 'react';
import './AddService.css';

const AddService = () => {
    return (
        <div className="addservice-section">
            <div className="page-title">
                <h4>Add Service</h4>
            </div>
            <form>
                <div className="addservice-form">
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="name">Service Name</label>
                            <input type="text" id="name" className="form-control" autoComplete="off" placeholder="Enter name" />
                        </div>
                        <div className="form-group col">
                            <label htmlFor="image">Service Image</label>
                            <div id="uploadBtn">Upload Image
                                <input type="file" id="image" name="image" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" className="form-control" autoComplete="off" placeholder="Enter Description" />
                        </div>
                    </div>
                </div>
                <input type="submit" className="brand-btn" id="saveBtn" value="Save" />
            </form>
        </div>
    );
};

export default AddService;