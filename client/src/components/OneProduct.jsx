import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter,Routes,Route,Link,useParams, useNavigate} from "react-router-dom";

function OneProduct(props) {
    const {_id} = useParams();
    const [product, setProduct] = useState({});
    console.log(_id);
    console.log("WHat is wrong?!");


    useEffect(() => {
        console.log("Hellloooo");
        axios.get(`http://localhost:8000/api/product/${_id}`)
        .then((res)=> {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    return (
        <div>
            <h1>One Product</h1>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <h1>{product.description}</h1>
        </div>
    );
    }

export default OneProduct;