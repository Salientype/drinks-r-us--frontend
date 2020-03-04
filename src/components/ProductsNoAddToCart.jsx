import React from 'react';
import '../App.css';

/*can also do function Footer()*/
class Products extends React.Component {
    render() {
       return (
          
            <div className="col mb-3">
                <div className="card h-100 product-body-style" style={{width: '17rem'}} id={this.props.id}>
                <img src={this.props.image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title item-title-style">{this.props.name}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text font-weight-bold">{this.props.price}$</p>              
                    </div>
                </div>
            </div>
          
       );
    }
  }

  export default Products;