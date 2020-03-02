import React from 'react';
import '../App.css';

/*can also do function Footer()*/
class Cart extends React.Component {
    render() {
       return (       
        <div className="row bg-info text-white">
        <div className="col">
          SKU: {this.props.product}
        </div>
        <div className="col">
          Units: {this.props.units}&nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-outline-warning bg-success">+</button>
          <button type="button" className="btn btn-outline-warning bg-success">-</button>
        </div>
        <div className="col">
          Price Per Unit: {this.props.price}$
        </div>
        <div className="col">
          Price: {this.props.price*this.props.units}$
        </div>
      </div>  
       );
    }
  }

  export default Cart;