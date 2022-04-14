import React, {useState} from 'react';
import axios from 'axios';

const CreateProject = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/projects", {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
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
            <h1>Project Manager</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                        />
                </div>
                <br/>
                <div>
                    <label htmlFor='price'>Price: </label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                        />
                </div>
                <br/>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                        />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateProject;
