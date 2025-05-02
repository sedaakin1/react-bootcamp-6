import { useState } from "react";
 import "./ProductItem.css";
 
 function ProductItem(props) {
   const { image, globalTitle, setGlobalTitle, title, price } = props;
   const [localTitleState, setTitleLocalState] = useState(title);
 
   console.log(props);
 
   function handleTitleChange() {
     setGlobalTitle("Yüzük");
     setTitleLocalState("Yüzük");
   }
 
   console.log("component render edildi!");
 
   return (
     <div className="product-item">
       <div className="product-image">
         <img src={image} alt="Soda" />
       </div>
       <div className="product-info">
         <b className="product-title">
           {globalTitle !== "" ? globalTitle : title}
         </b>
         <b className="product-title">{localTitleState}</b>
         <span className="product-price">{price}₺</span>
         <button onClick={handleTitleChange}>Title Değiştir!</button>
       </div>
     </div>
   );
 }
 
 export default ProductItem;