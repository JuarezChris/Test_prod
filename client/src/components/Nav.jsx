import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";

function Nav(props) {

    return (
        <div>
            <Link to={"/view/products"}>View Products</Link>
            <Link to={"/create/product"}>Order Product</Link>
        </div>
    );
    }

export default Nav;