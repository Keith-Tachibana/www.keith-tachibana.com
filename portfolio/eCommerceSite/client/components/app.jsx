import React, { Component } from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    fetch('/sales/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }

  async getCartItems() {
    try {
      const response = await fetch('/sales/cart');
      const cart = await response.json();
      this.setState({
        cart
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  async addToCart(product) {
    try {
      const productAdded = {
        productId: product.productId
      };
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const response = await fetch('/sales/cart', {
        method: 'POST',
        body: JSON.stringify(productAdded),
        headers
      });
      const json = await response.json();
      this.setState(previous => {
        const updatedCart = [...previous.cart];
        updatedCart.push(json);
        return {
          cart: updatedCart
        };
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  async placeOrder(order) {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      await fetch('/sales/orders', {
        method: 'POST',
        body: JSON.stringify(order),
        headers
      });
      this.setState({
        cart: []
      }, (name, params) => this.setView('catalog', {}));
    } catch (error) {
      console.error(error.message);
    }
  }

  async deleteItem(cartItemId) {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      await fetch(`/sales/cartItems/${cartItemId}`, {
        method: 'DELETE',
        headers
      });
      this.setState(previous => {
        const updatedCart = [...previous.cart];
        const findIndex = updatedCart.findIndex(item => item.cartItemId === cartItemId);
        updatedCart.splice(findIndex, 1);
        return {
          cart: updatedCart
        };
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  render() {
    /*
    return (
      <BrowserRouter>
        <Header
          cartItemCount={this.state.cart.length} />
        <Switch>
          <Route path="/" exact render={props =>
            <React.Fragment>
              <ProductList
                setView={this.setView} />
            </React.Fragment>
          } />
          <Route path="/cart" exact render={props =>
            <React.Fragment>
              <CartSummary
                deleteItem={this.deleteItem}
                cart={this.state.cart} />
            </React.Fragment>
          } />
          <Route path="/checkout" exact render={props =>
            <React.Fragment>
              <CheckoutForm
                cart={this.state.cart}
                placeOrder={this.placeOrder} />
            </React.Fragment>
          } />
          <Route path="/:productId" exact render={props =>
            <React.Fragment>
              <ProductDetails
                params={this.state.view.params}
                addToCart={this.addToCart} />
            </React.Fragment>
          } />
          <Route path="/" render={() => <div className="m-4 h1"><em>404:</em> Page not found</div>} />
        </Switch>
      </BrowserRouter>
    */
    const { view } = this.state;
    let renderView;
    switch (view.name) {
      case 'details':
        renderView = (
          <React.Fragment>
            <ProductDetails
              params={this.state.view.params}
              setView={this.setView}
              addToCart={this.addToCart} />
          </React.Fragment>
        );
        break;
      case 'cart':
        renderView = (
          <React.Fragment>
	    <CartSummary
	      deleteItem={this.deleteItem}
	      cart={this.state.cart}
              setView={this.setView} />
	  </React.Fragment>
        );
        break;
      case 'checkout':
	renderView = (
	  <React.Fragment>
	    <CheckoutForm
	      cart={this.state.cart}
	      setView={this.setView}
	      placeOrder={this.placeOrder} />
	  </React.Fragment>
	);
	break;
      default:
	renderView = (
	  <React.Fragment>
	    <ProductList
	      setView={this.setView} />
	  </React.Fragment>
	);
	break;
    }
    return (
      <React.Fragment>
	<Header
	  cartItemCount={this.state.cart.length}
	  setView={this.setView} />
	{renderView}
      </React.Fragment>	
    );
  }
}

export default App;