import "./ProductItem.css";

function ProductItem(){

    return(
        <div className="product-item" 
        style={{ }}>
            <div className="product-image">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozpqAoVcladM2kWA3HfxRwgbfc81uHZqmzg&s" 
               alt="Soda"
                style={{ }}
               />
               
            </div>
            <div className="product-info">
               <b className="product-title">Soda</b>
               <span className="product-price">4$</span>
            </div>
        </div>
        
    )

}

export default ProductItem