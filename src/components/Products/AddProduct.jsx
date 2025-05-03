
import React, { useState } from "react";
 import Button from "../UI/Button";
 import "./AddProduct.css";

const AddProduct = () => {

    const [product, setProduct] = useState({

        title:"",
        price: "",
        imageUrl: "",
    })

    function handleChange({target: {name, value}}){
        setProduct({...product,[name]: value })
    }       


    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState(0);
    // const [imageUrl, setImageUrl] = useState("");

    // function handleTitleChange(event){
    //     setTitle(event.target.value)
    // }
    // function handlePriceChange(event){
    //     setPrice(event.target.value)
    // }
    // function handleImageChange(event){
    //     setImageUrl(event.target.value)
    // }

  return (
    <form className='add-product-form'>
    {product.title} <br/>
    {product.price} <br/>
    {product.imageUrl} <br/>
    <label>
        Title:
        <input type="text" name="title" onChange={handleChange}/>
    </label>
    <label>
        Title:
        <input type="number" name="price" onChange={handleChange}/>
    </label>
    <label>
        Title:
        <input type="text" name="imageUrl" onChange={handleChange}/>
    </label>
    <Button color="success">Yeni Ürün Ekle</Button>

    </form>
  )
}

export default AddProduct