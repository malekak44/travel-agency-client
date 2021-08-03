import React from 'react';
import './AddService.css';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            cost: data.cost,
            description: data.description,
            imageURL: imageURL
        };

        const url = `http://localhost:4000/addService`;

        if (imageURL !== null) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(serviceData)
            })
                .then(res => document.getElementById("saveBtn").value = "Saved");
        }
    };

    const handleImageUpload = event => {
        document.getElementById("uploadBtn").innerText = "Uploading...";
        const imageData = new FormData();
        imageData.set('key', '9bce098a4a5f02a97229060f7d0bd219');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                document.getElementById("uploadBtn").innerText = "Uploaded✔";
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="addservice-section">
            <div className="page-title">
                <h4>Add Service</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="addservice-form">
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="name">Service Name</label>
                            <input type="text" id="name" className="form-control" autoComplete="off" placeholder="Enter name" {...register("name", { required: true })} />
                            {errors.name && <span className="error">Name is required.</span>}
                        </div>
                        <div className="form-group col">
                            <label htmlFor="cost">Service Cost</label>
                            <input type="text" className="form-control" autoComplete="off" id="cost" name="cost" {...register("cost", { required: true })} />
                            {errors.cost && <span className="error">Cost is required.</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="description">Description</label>
                            <textarea rows="3" id="description" className="form-control" autoComplete="off" placeholder="Enter Description" {...register("description", { required: true })} />
                            {errors.description && <span className="error">Description is required.</span>}
                        </div>
                        <div className="form-group col">
                            <label htmlFor="image">Service Image</label>
                            <div id="uploadBtn">Upload Image
                                <input type="file" onChange={handleImageUpload} id="image" name="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" className="brand-btn" id="saveBtn" value="Save" />
            </form>
        </div>
    );
};

export default AddService;
