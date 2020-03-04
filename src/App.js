import React from 'react';
import Products from './components/Products';
import Header from './components/Header';
import { withRouter } from 'react-router';
import axios from 'axios';

//Test JSON data for now
//Will connect to database later
//which I will have the componentDidMount api call and set products
//with this.setState. example of this located in job-post-react-app

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      error: null,
      isLoaded: true,
      products: [], //will make this empty array [] once i connect to db,
      cart: [],
      location: '/'
    };

    this.AddToCart=this.AddToCart.bind(this);
  }

  
  AddToCart(item){

    //Grab the matching item and all its associated properties
    const existingProduct = this.state.cart.filter(p => p.id === item.id);

    //If the item exist, it will increment the units by 1 of the matching item
    if(existingProduct.length > 0)
    {
      const removedExistingProducts = this.state.cart.filter(p => p.id !== item.id);

      const updatedUnitsProduct = {
        ...existingProduct[0],
        units: existingProduct[0].units + item.units
      };

      this.setState({
        cart: [...removedExistingProducts, updatedUnitsProduct]
      });
    }
    else 
    {
      //If item does not exist, the cart is now the cart plus the new item 
      this.setState({
        cart: [...this.state.cart, item]
      });
    }
}

  //Common for ajax calls to be triggered here. 
  //Component life cycle method that gets called right after your component
  //gets shown to the screen 
  componentDidMount() 
  {
    axios.get("/api/products/")
    .then( (response) => {

      //console.log(response.data);
      this.setState({ products: response.data});

    }).catch((error) => {
      console.log(error);
    });    
  }

componentWillMount() {
  this.unlisten = this.props.history.listen((location, action) => {
    //console.log('You changed the page to: ' + location.pathname)
    this.setState({location: location.pathname});
  });
}
componentWillUnmount() {
    this.unlisten();
}

  render() {   
    const { location } = this.state;
    
    const productsJSX = this.state.products.map( (product, index) => 
    {
      //Passing the key and spreading the product to the products component
      //Also spreading the product into the add to cart function when user clicks
      return <Products key={product.id} {...product} onClick={() => this.AddToCart({...product})}  />
    });


    return (
        <div className="App">
            <Header check={this.state}/>
        
            {location === '/' && window.location.pathname === '/' &&
            <div className="Products row row-cols-1 row-cols-md-4 col-rows-4">{productsJSX}</div>
            }
        </div>
    );
  }
}

export default withRouter(App);
