import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import ListAllProduct from "../components/ListAllProduct";

const Home = (props) => {

    const [productList, setProductList] = useState([]);

    return (
        <div>
            <CreateProduct productList={productList} setProductList={setProductList}/>
            <hr />
            <ListAllProduct productList={productList} setProductList={setProductList}/>
        </div>
    );
};
export default Home;
