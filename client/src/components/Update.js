import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from "react-router-dom";

const Update = (props) => {
    const { id } = useParams(); 
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err));
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/"); // this will take us back to the Home.js
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <header>Product Manager </header>
            <form onSubmit={updateProduct}>
                <div className='form-fields'>
                    <label htmlFor='title'>Title: </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                        />
                </div>
                <br/>
                <div className='form-fields'>
                    <label htmlFor='price'>Price: </label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                        />
                </div>
                <br/>
                <div className='form-fields'>
                    <label htmlFor='description'>Description: </label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                        />
                </div>
                <button className="submit-button" type="submit" value="Update">Submit</button>
            </form>
            <Link to={`/`}>Go Back</Link>
        </div>
    )
}
export default Update;

