import React from 'react';
import '../App.css';
import Products from '../components/ProductsNoAddToCart';
import axios from 'axios';

/*can also do function Footer()*/
class Wine extends React.Component {
   constructor(props) {

      super(props);
      this.state =
      {
         products: []
      }
      
   }

   componentDidMount() 
   {
     axios.get("/api/products/type/3")
     .then( (response) => {
 
       //console.log(response.data);
       this.setState({ products: response.data});
 
     }).catch((error) => {
       console.log(error);
     });    
   }



    render() {
      const productsJSX = this.state.products.map( (product, index) => 
      {
        //Passing the key and spreading the product to the products component
        //Also spreading the product into the add to cart function when user clicks
        return <Products key={product.id} {...product} />
      });

       return (
          <div>
             <h2>Wine Page</h2>
             <div className="Products row row-cols-1 row-cols-md-4 col-rows-4">{productsJSX}</div>
          </div>
       );
    }
  }

  export default Wine;