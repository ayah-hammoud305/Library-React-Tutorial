import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "../src/pages/Home.jsx";
import Books from "./pages/Books.jsx";
import BookInfo from "./pages/BookInfo.jsx";
import { books } from "./data.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

    function addToCart(book) {
      setCart([...cart,{ ...book, quantity: 1 }])
      // Spread "..." operator includes everything within that property, sale price, id, url, etc.
    }

    function changeQuantity(book, quantity) {
      setCart(cart.map(item => {
        if (item.id === book.id) {
          return {
            ...item,
            quantity: +quantity,
          }
        }
        else {
          return item
        }
      }))
    }

    function removeItem(item) {
      setCart(cart.filter(book => book.id !== item.id))
      // keep in array if the id's dont match, if they do, remove it
    }


    // Remember to pass functions into routes/pages.
  
    function numberOfItems() {
      let counter = 0;
      cart.forEach(item => {
        counter += item.quantity
      })
      return counter;
    }
    // for each item in the cart, counter should increase with the item.quantity

    useEffect(() => {
      console.log(cart)
    }, [cart])

    


  return ( 
    <Router>
    <div className="App">
      {/* put paranthesis at the end of functions to call and execute a function, it was only calling let counter = 0; before instead of whats inside it */}
      <Nav numberOfItems={numberOfItems()} />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render={() => <BookInfo cart={cart} books={books} addToCart={addToCart} />} />
      <Route path="/cart" render={() => <Cart books={books}  cart={cart} changeQuantity={changeQuantity}  removeItem={removeItem} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
