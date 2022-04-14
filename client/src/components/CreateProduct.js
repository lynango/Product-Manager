import React, {useState} from 'react';
import axios from 'axios';


const CreateProduct = (props) => {

    const { productList, setProductList } = props; // line added to define "setProjects and to display all the projects
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
                setProductList([...productList, res.data]);  // line added to display all the projects
                setTitle("");
                setPrice("");
                setDescription("");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <header>Product Manager</header>
            <form onSubmit={submitHandler}>
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
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateProduct;
