import React from 'react';
import CartComponent from '../components/Cart';
import '../App.css';
import axios from 'axios';


class Cart extends React.Component {

   constructor(props) {

      super(props);
  
      this.state = {
        unitTotalQty: 0,
        unitTotalPrice: 0
      };
    }

    placeOrder(price_total, units_total)
    {
       alert('I placed order!');

       //Populate an orderArray containing objects with their respective order items
       var orderArray = [];

       var populateOrderItemsArray = this.props.cartData.cart.forEach( (item, index) =>
       {
            var orderObject = {product_id: item.id, quantity: item.units, price: item.price};
            orderArray.push(orderObject);
            return true;
       });

       //console.log(orderArray);

       //Call the new order API to register order in the system
       axios.post('/api/orders/register', {
         user_id: 1,
         quantity: units_total,
         price: price_total,
         orderArray
       })
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });

       //Refresh the page to clear the cart
        window.location.reload(false);
    }
    

    render() {

      const cartJSX = this.props.cartData.cart.map( (cart, index) => 
      {
        return <CartComponent key={cart.id} {...cart} />
      });

      //let totalPrice = 0;
      //let test = 0;

      let priceTotal = 0;

      let unitsTotal = 0;

      const totalPrice = this.props.cartData.cart.forEach( (value, index) =>
      {
         priceTotal += (parseFloat(value.price) * value.units) ;

         return priceTotal;
      });

      const totalUnits = this.props.cartData.cart.forEach( (value, index) =>
      {
         unitsTotal += (value.units) ;

         return unitsTotal;
      });


       return (
          <div>
             <h2>Cart Page</h2>
             <ul>
                {cartJSX}
                <div className="row bg-info text-white">
                  <div className="col">                   
                  </div>
                  <div className="col">                  
                  </div>
                  <div className="col">
                  </div>
                  <div className="col" style={{background:'#0066ff'}}>
                     Total Price: {priceTotal.toFixed(2)}$
                  </div>
               </div> 
             </ul>

             <h3 className="text-right" style={{'marginRight':'22px'}}>Price Total: {priceTotal.toFixed(2)}$</h3>
             <h3 className="text-right" style={{'marginRight':'22px'}}>Total Units: {unitsTotal}</h3>

            {unitsTotal > 0 &&
             <button className="btn btn-success float-right" style={{width:'300px', 'marginRight':'22px'}} onClick={this.placeOrder.bind(this,priceTotal.toFixed(2), unitsTotal)}>Place Order</button>
            }
                
          </div>
       );
    }
  }

  export default Cart;