import React from 'react';
import CartComponent from '../components/Cart';
import '../App.css';

const cart = 
[{"id":1,"product":"Best Intentions, The (Den goda viljan)","description":"odio in hac habitasse platea","price":15,"image":"http://dummyimage.com/250x250.jpg/dddddd/000000", "units":2},
{"id":2,"product":"Brother Orchid","description":"quam pede lobortis ligula sit","price":90,"image":"http://dummyimage.com/250x250.jpg/ff4444/ffffff", "units": 5}];

class Cart extends React.Component {

   constructor(props) {

      super(props);
  
      this.state = {
        cart: cart,
        unitTotalQty: 0,
        unitTotalPrice: 0
      };
    }
    

    render() {

      const cartJSX = this.state.cart.map( (cart, index) => 
      {
        return <CartComponent key={cart.id} {...cart} />
      });

      console.log('IN CART PAGE: ' + this.props.location.state)

       return (
          <div>
             <h2>Cart Page</h2>
             <ul>
                {cartJSX}
             </ul>
          </div>
       );
    }
  }

  export default Cart;