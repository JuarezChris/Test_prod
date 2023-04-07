import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";

function DisplayAll(props) {
    // const {todo, setTodo} = props;
    // const [product, setProduct] = useState({title: "", price: 0, description: ""});
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
        console.log(res.data);
            setProducts(res.data);
    })
        .catch((err)=>{
            console.log(err);
            
        })
    }, [])

    return (
        <div>
           {
            products.map((product, index) => {
                return <Link key={index} to={`/oneProduct/${product._id}`}>{product.description}</Link>
            })
           }
        </div>
    );
    }

export default DisplayAll;
