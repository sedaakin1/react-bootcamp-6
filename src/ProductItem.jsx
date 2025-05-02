import "./ProductItem.css";

function ProductItem(props) {

  function handleTitleChange(){
    props.setGlobalTitle("Yüzük")
  }

  
  
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.image} alt="Soda" />
      </div>
      <div className="product-info">
        <b className="product-title">{props.globalTitle}</b>
        <span className="product-price">{props.price}₺</span>
        <button onClick={handleTitleChange}>Title Değiştir!</button>
      </div>
    </div>
  );
}

export default ProductItem