import React, { useState } from 'react';
import axios from 'axios';

function Product_form(props) {
    // const {todo, setTodo} = props;
    // const [product, setProduct] = useState({title: "", price: 0, description: ""});
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            name,
            price,
            description
        })

        .then( res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => console.log(err))

    }

    // const onSubmitHandler = (e) => {
    //     //prevent default behavior of the submit
    //     e.preventDefault();
    //     //make a post request to create a new person
    //     axios.post('http://localhost:8000/api/people', {
    //         firstName,    // this is shortcut syntax for firstName: firstName,
    //         lastName      // this is shortcut syntax for lastName: lastName
    //     })
    //         .then(res=>{
    //             console.log(res); // always console log to get used to tracking your data!
    //             console.log(res.data);
    //         })
    //         .catch(err=>console.log(err))
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title</label><br/>
                    {/* When the user types in this input, our onChange synthetic event 
                        runs this arrow function, setting that event's target's (input) 
                        value (what's typed into the input) to our updated state   */}
                    <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>description</label><br/>
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    );
    }

export default Product_form;