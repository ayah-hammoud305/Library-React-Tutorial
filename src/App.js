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

    function changeQuantity(book, quantity ) {
      console.log(book, quantity)
    }

    useEffect(() => {
      console.log(cart)
    }, [cart])

    


  return ( 
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render={() => <BookInfo cart={cart} books={books} addToCart={addToCart} />} />
      <Route path="/cart" render={() => <Cart books={books}  cart={cart} changeQuantity={changeQuantity} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
