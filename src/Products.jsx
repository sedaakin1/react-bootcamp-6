import ProductItem from "./ProductItem"
import "./ProductItem.css"

function Products(){

    return(
        <div className="products">
          <h1>Products Component</h1>
          <div className="products-wrapper">
            <ProductItem 
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozpqAoVcladM2kWA3HfxRwgbfc81uHZqmzg&s"}
                title="Soda"
                price={10}/>

            <ProductItem 
                image="https://organickid.com.tr/media/13780/catalog/40030-001%20(2).jpg"
                title="Tisort"
                price={500}
             />
            
          </div>
        </div>
    )

}

export default Products