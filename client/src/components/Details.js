import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Details = (props) => {

    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); 

    return (
        <div>
            <header>{oneProduct.title}</header>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <Link to={`/`}>Go Back</Link>
        </div>
    );
};

export default Details;